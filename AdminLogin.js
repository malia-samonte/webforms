import React, { useRef, useState, useEffect } from "react";

export const AdminLogin = (props) => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pwd);
    setEmail("");
    setPwd("");
    setSuccess(true);
  };

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
            onClick={() => props.onFormSwitch("UserLogin")}
          >
            {" "}
            User Login
          </button>
        </div>

        <br></br>
        <h1>Admin Log In</h1>

        <div id="main-content">
          <form onSubmit={handleSubmit}>
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              placeholder="member@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="text"
              id="password"
              placeholder="enter password here"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <br></br>
            <button> Log In</button>
          </form>
        </div>
      </div>
    </body>
  );
};
