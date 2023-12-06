import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../About/About.css";
import { Link } from 'react-router-dom'
import { useLogin } from '../../pages/Login/LoginContext';
export default function About() {


  const {profilePic,about}=useLogin();
const isAbout =!about

//  useEffect(()=>{
//   setAboutImg(localStorage.getItem("profilePic"));
//  },[])
//   const [cat,setCat]=useState([]);
//   useEffect(()=>{
//     const getCat=async()=>{
//       const res=await axios.get('http://localhost:5000/api/cat');

//       setCat(res.data);
//     }
//     getCat();
//   },[])

useEffect(()=>{
console.log(about)
},[])

  return (
   <>
   <div className="sidebar">
    <div className="sidebarItem">
        <span className='sidebarTitle'>About Me</span>

        <img className='aboutimg'
          src={profilePic}
          alt=""
        />
      <p className='about-text'>
  {isAbout
    ? 'Laboris sunt aute cupidatat velit magna velit ullamco don mollit amet ex esse.Sunt eu ut nostrud id quis proident.'
    : about}
</p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
   </div>
   </>
  )
}
