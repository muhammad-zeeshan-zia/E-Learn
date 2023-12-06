import React, { useState } from "react";
import image from '../../assets/zee.jpg';
import './Contact.css'
import { useNavigate } from "react-router-dom";

export default function Contact()
{
const [skills,setSkills]=useState(["Html","CSS","JavaScript","React","ExpressJS","MongoDb"]);


    return(
        <>
       <div className="contact-wrapper">
      
        <div className="skills">

        
            <h5 className="skills-text">Skills</h5>

            <ul>
        {
            skills.map((item,index)=>{return (
                <li className="skills-list" key={index} value={item}>{item}  <hr className="skills-line" /></li> 
                )

               
            })
        }
        </ul>

        </div>

        <div className="contact-info">
            
           <span className="contact-name">Muhammad Zeeshan Zia</span> 
           <h2 className="contact-about">Full Stack Web Developer</h2>
<div className="contact-social">

    <button className="button-facebook b"><i class="fa-brands fa-facebook"></i></button>
     <button className="button-instagram b"><i class="fa-brands fa-instagram"></i></button>
      <button className="button-twitter b " onClick={()=>{
        window.open("https://twitter.com/xeeshna7860","_blank")
      }}><i class="fa-brands fa-twitter"></i></button>
       <button className="button-github b" onClick={()=>{
        window.open('https://github.com/muhammad-zeeshan-zia',"_blank")
       }} ><i class="fa-brands fa-github"></i></button>
</div>

        </div>
        <div className="contact-img">
            <img  className="contact-image" src={image} alt="" />
        </div>
        

       </div>
            
            
        </>
    )
}