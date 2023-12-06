
import { Link } from 'react-router-dom';
import React, { useState, useRef} from 'react';
import axios from 'axios';
import '../Login/login.css';
import { useLogin } from './LoginContext';
import { useNavigate } from 'react-router-dom'
const Login = () => {
  // ... (other state and functions)
  const emailRef = useRef();
  const navigate = useNavigate();
  const passwordRef = useRef();
  const { username, setID, setProfilePic, setLoggedIn, setUsername, setEmail, setAbout } = useLogin()

  const [loginError, setLoginError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login',
        { email: emailRef.current.value, password: passwordRef.current.value });

      setEmail(res.data.email);
      setProfilePic(res.data.profilePic);
      setLoggedIn(false);
      setID(res.data._id)
      setUsername(res.data.username)
      setAbout(res.data.about)
      console.log(username)
      setLoggedIn(false);
      navigate('/dashboard')



    }
    catch (err) {
      console.log(err)
      setLoginError(true);
    }

  }

  return (
    <div>

      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input className="loginInput" type="text" placeholder="Enter your email..." autoComplete='off' ref={emailRef} onChange={() => {
            setLoggedIn(false)
          }}


          />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." autoComplete='off' ref={passwordRef} />


          <button className="loginButton" onClick={handleSubmit}>Login</button>
          {loginError && <div className='login-error'>Wrong Email or Password</div>}


        </form>
        <Link to="/register">   <button className="loginRegisterButton">Register</button></Link>

      </div>

    </div>
  );
};

export default Login;
