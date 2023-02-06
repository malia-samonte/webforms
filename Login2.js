import { render } from "@testing-library/react";
import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + " test");
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlfor="email">Email : </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@domain.com"
          name="email"
          id="email"
        />
        <label htmlfor="password">Password : </label>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          type="password"
          placeholder="***********"
          name="email"
          id="password"
        />
        <button>Log in</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        New User? Register here.
      </button>
    </div>
  );
};
