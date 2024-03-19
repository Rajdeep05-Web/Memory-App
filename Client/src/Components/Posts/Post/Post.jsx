import React from "react";
import  {useDispatch}  from "react-redux";
import { useNavigate } from "react-router-dom";


import { deletePostFn, likePostFn} from "../../../actions/posts.js";

import './style.css';
import emptyimg from "../../../images/emptyimg.jpg";

 const Post = ({post, setUpdatePost}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const editHandler = () => {
        setUpdatePost(post);
    }
    const deleteHandler = () => {
        
        dispatch(deletePostFn(post._id));

    }
    const likeHandler = () => {

        dispatch(likePostFn(post._id));

    }
    const cardHandler = (post) => {
        navigate(`/postdetails/${post._id}`);
    }

    const timeAgo = (createdAt) => {
        const seconds = Math.floor(new Date().getTime() - new Date(createdAt).getTime()) / 1000;

        const timeInterval = {
            year: 31536000,
            month: 2592000,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        }

        if(seconds<timeInterval.minute){
            return "Just now";
        } else if (seconds < timeInterval.hour){
            return Math.floor(seconds/timeInterval.minute) + " minutes ago";
        } else if (seconds < timeInterval.day){
            return Math.floor(seconds/timeInterval.hour) + " hours ago";
        } else if (seconds < timeInterval.month){
            return Math.floor(seconds/timeInterval.day) + " days ago";
        } else if (seconds < timeInterval.year){
            return Math.floor(seconds/timeInterval.month) + " months ago";
        } else {
            return Math.floor(seconds/timeInterval.year) + " years ago";
        }

    }
        


    return(
        <>
       <div className="card" onClick={ ()=> cardHandler(post) }>
          
            <img className="img" src={post.selectedFile === ""? emptyimg: post.selectedFile} alt="memory iamge" height={100} width={100}></img>

            <div className="create-detail">
                <h3>{post.name}</h3>
                <h6>{timeAgo(post.createdAt)}</h6>
            </div>

            <div className="post-detail">
                <p className="tag">{post.tags.map( (tag)=>" #"+tag )}</p>
                <h1 className="title">{post.title}</h1>
                <p className="msg">{post.message}</p>
               
                <div className="btn">
                <button className="like-btn" onClick={ () => likeHandler() }>Like {post.likes.length} </button>

                { (user?.result?._id || user?.result?.sub) === post.creator &&  
                    <>
                    <button className="edit-btn" onClick={ () => editHandler() }>Edit</button>
                    <button className="delete-btn" onClick={  () => deleteHandler()  }>Delete</button>
                    </> }

                </div> 

            </div>
          
       </div>
        </>
    )
}


export default Post;