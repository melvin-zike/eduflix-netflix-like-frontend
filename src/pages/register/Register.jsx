import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      await axios.post("https://eduflix-api.herokuapp.com/api/auth/register", { email, username, password});
      history.push("/login");
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <div className="imgLogo">
                Eduflix
        </div>
           <Link to="/login">
          <button className="loginButton">Sign In</button>
          </Link>
          
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Educational Videos, Lectures and more.</h1>
        <h2>Watch anytime.</h2>
        <p>
          Ready to Learn? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}