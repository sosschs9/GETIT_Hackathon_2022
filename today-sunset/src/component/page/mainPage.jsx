import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import MapView from "../ui/map";
import PhotoList from "../list/PhotoList";
import data from '../../data.json';

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

function arrOrder(key, order) {
    return function(a, b) {
        if (a[key] > b[key]) {    
            return -order;    
        } else if (a[key] < b[key]) {    
            return order;    
        } 
        
        return 0;    
    }    
}

function MainPage(props){
    const navigate = useNavigate();

    data.sort(arrOrder("like", 1));
    var Fivedata = data.slice(0, 5);
    data.sort(arrOrder("index", -1));

    return (
        <body class="d-flex flex-column min-vh-100">

            <Nav/>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6">
                            <MapView/>
                            <br/>
                            <p>마커를 클릭하면 해당하는 사진을 볼 수 있습니다</p>
                        </div>
                        <div class="col-md-6"> 
                            <TitleText>Like Top 5</TitleText>
                            <PhotoList
                                photos={ Fivedata }
                                onClickItem={(item) => {
                                    navigate(`/photo/${item.index}`);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </body>
    );
}

export default MainPage;
