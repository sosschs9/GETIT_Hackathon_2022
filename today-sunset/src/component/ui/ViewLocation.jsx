// data.json에서 받아온 데이터 읽기
import React from "react";
import data from "../data.json";

function ViewLocation(props){
    const { id } = props;
    
    return(
        <p>{item[id].location}</p>
    )

}

export default ViewLocation;