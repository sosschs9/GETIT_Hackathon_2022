import React, { useState } from 'react'

function Text(props) {
    return(
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">사진과 내용을 입력해주세요</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    );
}

export default Text;