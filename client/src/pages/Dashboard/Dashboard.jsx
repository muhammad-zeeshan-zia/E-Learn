
import '../Dashboard/Dashboard.css'
import axios from 'axios';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import About from '../../Components/About/About';
import Posts from '../../Components/Posts/Posts';
import Header from '../../Components/Header/Header';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLogin } from '../Login/LoginContext';
import Search from '../../Components/Search/Search';
const Dashboard = () => {
  const [posts,setposts]=useState([]);
  const [noPost,setNoPosts]=useState(true)
  const {search}=useLocation();
  const{username}=useLogin();
  useEffect(()=>{
   
    const fetchPosts=async()=>{
    
        const res= await axios.get('http://localhost:5000/api/post'+search);
        setposts(res.data); 
        console.log(res.data)
        setNoPosts(false)
        if (res.data.length === 0) {
          setNoPosts(true);
        
        } else {
          setNoPosts(false);
        }
    }
    fetchPosts();
   
  },[search])   
                

  return (
  <>
  
  
     <Search/>
    
       
    <div className="home">
    {noPost ? <div className='nopage'> 
    
    <img className='nopage-img' src="https://memories-app-redis.netlify.app/static/media/nopost.09eb101fbe5ce1b12f92.png" alt="" />
    <hr/>
    </div>
 
  :( 
     <Posts post={posts}/>
    )}
    {username  && <About/> }
    </div>
    <Sidebar/>

   
    </>
 
  )
}

export default Dashboard