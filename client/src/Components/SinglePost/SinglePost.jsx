import axios from 'axios';
import '../SinglePost/SinglePost.css';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from '../../pages/Login/LoginContext';

export default function SinglePost() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split('/')[2];
    const [user, setuser] = useState('true');
    const [post, setPost] = useState({});
    const [PostId, setPostID] = useState('');
    const { username } = useLogin();
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${pathname}`);
            setPost(res.data);
            setPostID(pathname);
            if (res.data.username === username) {
                setuser(true);
            }
            else {
                setuser(false)
            }
        }
        getPost()
    }
        , [pathname])
    const handleDelete = async () => {
        try {
            const deletePost = await axios.delete(`http://localhost:5000/api/post/${pathname}`)
            navigate('/dashboard')
        }
        catch (err) {
        }
    }


    return (
        <>

            <div className="singlePost">
                <div className="singlePostWrapper">


                    <img
                        className="singlePostImg"
                        src={post.photo}
                        alt=""
                    />



                    <h1 className="singlePostTitle">
                        {post.title}
                        {user && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" ></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                    <div className="singlePostInfo">
                        <span>
                            Author:
                            <b className="singlePostAuthor">

                                <Link className='link' to={`/dashboard?username=${post.username}`}>{post.username}</Link>


                            </b>
                        </span>
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>

                    <p className="singlePostDesc">
                        {post.desc}
                    </p>
                </div>

            </div>
        </>
    )
}
