import React, { useState } from 'react'
import styled from "styled-components";

const Viewer= styled.p`
    background-color : white;
    font-size : 20px;
`

function Time(props){
    const [timer, setTimer] = useState("00:00:00");

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return (
        <div class="d-grid gap-2 col-6 mx-auto">
        <Viewer>현재시간: {timer}</Viewer>
      </div>
    );
}

export default Time;