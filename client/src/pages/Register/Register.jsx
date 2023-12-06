import { useState } from 'react';
import '../Register/register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Register() {

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


   
    const handleSubmit=async(e)=>{
        e.preventDefault();
    
        try{

            const res = await axios.post('http://localhost:5000/api/auth/register',
            {
                username,email,password
            }
            
            )
        
      res.data && window.location.replace('/login');
        }
        
        catch(err)
        {
            console.log(err);
        }

    
    }

  
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."autoComplete='off' value={username} 
         onChange={(e)=>{
            setUsername(e.target.value);
        }} 
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." autoComplete='off'value={email}
        onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."autoComplete='off'value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
       

        <button className="registerButton"onClick={handleSubmit}>Register</button>
      </form>
        <Link to ="/login"><button className="registerLoginButton">Login</button></Link>
        
    
    </div>
    )
}
