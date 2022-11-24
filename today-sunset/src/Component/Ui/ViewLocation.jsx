import React from "react";
import data from "../data.json";

function ViewLocation(props){
    const { id } = props;
    
    return(
        <p>{item[id].location}</p>
    )

}

export default ViewLocation;