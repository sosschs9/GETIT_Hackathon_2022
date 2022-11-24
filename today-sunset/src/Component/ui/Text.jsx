import React, { useState } from 'react'
import styled from "styled-components";

function Text(props) {
    return(
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">당신의 감정과 사진을 여기에 기록해보세요.</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    );
}

export default Text;