import React from 'react'
import NavBar from '../components/NavBar';


function MainHeader() {
    return(
        <div>
            <div class="tfactsheader">
                <header>
                <div class="transparentheader">
                    <button
                        className="admin-link-btn" 
                        >Log Out
                    </button>
                    <div class="logo">
                        <img src="https://tfactscluster1.dcs.tn.gov/images/DCSColorWhiteS.png"></img>
                    </div>
                </div>
                </header>
            </div>
            <NavBar/>
        </div>
    )
}

export default MainHeader;