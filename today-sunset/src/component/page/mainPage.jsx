import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import MapView from "../ui/map";
import PhotoList from "../list/PhotoList";

function MainPage(props){
    const navigate = useNavigate();

    return (
        <body class="d-flex flex-column min-vh-100">

            <Nav/>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6"><MapView /></div>
                        <div class="col-md-6">좋아요 상위 5개 리스트</div>
                    </div>
                </div>
            </section>
            <Footer/>
        </body>
    );
}

export default MainPage;
