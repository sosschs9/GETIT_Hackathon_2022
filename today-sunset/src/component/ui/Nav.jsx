import React from "react";
import '../../index.css';
import { NavLink, useNavigate } from "react-router-dom";

function Nav(props){
    const navigate = useNavigate();

    return (
        <div className="Nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" 
                    onClick={() => {
                        navigate("/");
                    }}>오늘의 노을</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" 
                                onClick={() => {
                                    navigate("/photo-upload");
                                }}>노을 올리기</a>
                                {/* <NavLink to='/test'>Test</NavLink> */}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" 
                                 onClick={() => {
                                    navigate("/photolist-view");
                                }}>노을 구경하기</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Nav;

