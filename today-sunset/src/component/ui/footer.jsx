import React from "react";
import '../../index.css';
import { useNavigate } from "react-router-dom";

function Footer(props) {
    const navigate = useNavigate();

    return (

        <footer class="py-5 bg-light mt-auto">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <span>GETIT 내가그린기릿그림</span><br/>
                        <span>송혜경 | 유지예 | 최경진 | 김주연 | 정지윤</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;