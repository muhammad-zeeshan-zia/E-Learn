import React from 'react';
import '../Post/Post.css';
import { Link } from 'react-router-dom';
import { useLogin } from '../../pages/Login/LoginContext';
export default function Post({post}) {
  const {loggedIn,setLoggedIn,handleLogout,username,email,profilePic,setUsername,setEmail,setProfilePic,ID,setID} =useLogin();
  setLoggedIn(true) 
  
  console.log(username)
  return (
    <>
      <div className="post">
       <Link to={`/about/${post._id}`}> <img className="postImg" loading='lazy' src={post.photo ? post.photo : "https://www.phoneworld.com.pk/wp-content/uploads/2022/09/11-1.png"} alt="" /></Link>
        <div className="postInfo">
          <div className="postCats">
           {
              post.categories.map((elem,index)=>{
               return( 
                <Link className="linkStyle" to={`/dashboard?catName=${elem}`}><span className="postCat" key={index}>{elem}</span></Link> 
              )})
            }
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDec">
          {post.desc}
        </p>
      </div>
    </>
  );
}

