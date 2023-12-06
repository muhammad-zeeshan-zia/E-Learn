import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import '../Posts/Posts.css'

export default function Posts({post}) {
  
  const sortedPosts = post.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    
  <>
   <div className="posts">
     {/* <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /> */}
     

     {sortedPosts.map((elem)=>{
      return <Post post={elem}/>
     })}
    
  </div>
  </>
  )
}
