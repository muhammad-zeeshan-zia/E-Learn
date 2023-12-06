
import React, { useEffect, useState } from 'react'
import '../Topbar/topbar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { useLogin } from '../../pages/Login/LoginContext';
import { useNavigate } from 'react-router-dom';
export default function Topbar() {
    const {loggedIn,setLoggedIn,handleLogout,username,email,profilePic,setUsername,setEmail,setProfilePic,ID,setID,convertbase64} =useLogin();
    
    const Navigate=useNavigate();
    console.log(username)
    console.log("hi");
    
  const logout=(e)=>{
    e.preventDefault();
    window.location.replace('/login')
    setLoggedIn(false);
    
  }

    const handleSubmit=async(e)=>{

      
      try{
          const res= await axios.put(`http://localhost:5000/api/auth/update/${ID}`,{username,email,profilePic})
          setUsername(username);
          setEmail(email);
          setProfilePic(profilePic)
          Navigate('/dashboard')
      }
      catch(err)
      {
        console.log(err);
      }
    }
    
    const handlefileupload=async(e)=>{
      const file= e.target.files[0];
      const base64 = await convertbase64(file);
      setProfilePic(base64);

  }
  return (
    <>
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>

        <div className="topCenter">
        <ul className="topList">
       <Link to="/dashboard" className='link' >   <li className="topListItem ">HOME</li></Link>
      {username && <Link to="/setting"className="link topListItem"><li className="topListItem">ABOUT</li></Link>  }
      <Link to="/contact" className='link topListItem'> <li className="topListItem">CONTACT</li></Link> 
       {username && <Link to={"/write"}className='link'>   <li className="topListItem "id='#linking'>PUBLISH</li></Link>}
          {username  && <li className="topListItem" onClick={logout}>LOGOUT</li>}
        </ul>
        </div>
        <div className="topRight">
        {username ? (
    
    
  <Link to={"/setting"}> <img
      className="topImg"
      src={profilePic}
      alt="Not"
    />
</Link> 
          
        ) : (
          <ul className="topList">
            
            <Link to="/login" className='link'> <li className="topListItem" >LOGIN</li></Link>
            <Link to="/register" className='link'> <li className="topListItem">REGISTER</li></Link>
           
          </ul>
        )}
       
      </div>
       
    </div>
  
    <Sidebar 
        username={username}
        email={email}
        profilePic={profilePic}
        handlefileupload={handlefileupload}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setName={setUsername}
      />
    </>
  )
}
