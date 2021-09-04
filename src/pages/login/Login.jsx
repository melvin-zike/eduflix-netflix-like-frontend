import { useState, useContext } from "react";
import {Link } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    login({email, password}, dispatch)
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <div className="imgLogo">
                Eduflix
          </div>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="loginButton" onClick={handleLogin}>Sign In</button>

          <span>
            New to <span className="loginName">Eduflix</span>? <Link to="/register">
            <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            {/* This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>. */}
          </small>
        </form>
      </div>
    </div>
  );
}