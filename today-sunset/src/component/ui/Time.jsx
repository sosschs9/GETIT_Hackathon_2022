import React, { useState } from 'react'

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
        <button class="btn btn-primary" type="button">{timer}</button>
      </div>
    );
}

export default Time;