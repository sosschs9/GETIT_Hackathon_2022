import React from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Like from "../Ui/Like";
import ViewLocation from "../Ui/ViewLocation";

const Container = styled.div`
    padding : 16px;
    width : calc(100% - 32px);
    display : flex;
    flex-direction : ccolumn;
    align-items : center;
    justify-content : center;
`

function Viewpage() {
    const navigate = useNavigate();

    const ID = 1;

    return(
        <Like></Like>
        <div>
            <ViewLocation>
                id = 1;
            </ViewLocation>
        </div>
    )

}

export default Viewpage;