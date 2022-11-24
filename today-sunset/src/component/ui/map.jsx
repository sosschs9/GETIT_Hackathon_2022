/* global kakao */
import React, { useEffect , useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import positions from "../../data.json";

function MapView () {  
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(state.center.lat,state.center.lng),
      level: 7,
    };
    const map = new kakao.maps.Map(container, options);

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition( function(posi){
        var lat = posi.coords.latitude, // 위도
            lon = posi.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon);
        options.center = locPosition;
        map.setCenter(locPosition);
      });
 
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }

    positions.forEach((el) => {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.location,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', function photoView() {
        window.location.replace(`/photo/${el.index}`)
      });
    });
  };

  return (
    <div id="map" style={{ width: "100%", height: "450px" }}></div>
  );
}
                    

export default MapView;