import React, {useRef, useState, useEffect} from "react";
//import axios from './api/axios';
// import {useNavigate} from "react-router-dom";


export const AdminPortal = (props) => {
    // const navigate = useNavigate();

    return (
        <body>
        <div id="wrapper">
            <div class="tfactsheader">
                <header>
                <div class="transparentheader">
                    <div class="logo">
                        <img src="https://tfactscluster1.dcs.tn.gov/images/DCSColorWhiteS.png"></img>
                    </div>
                </div>
                </header>
            </div>

            <div class="button-header">
                <button
                    className="admin-link-btn" 
                    >Sign Out
                </button>
            </div>
            <br></br>

            <h1>Admin Portal</h1>
            </div>
            <div id="main-content-general" >
                <div class="side-by-side-buttons">
                    <button 
                        class="button-to-page"
                        // onClick={()=>navigate("/Components/CreateUserLogin")}
                        > Create User Login/Profile 
                    </button>
                    <button class="button-to-page"> Manage User Access </button>
                    <button class="button-to-page"> Update Admin Profile </button>
                    <button class="button-to-page"> Update Security Credetials </button>
                </div>
            </div>

       </body>
    )
}