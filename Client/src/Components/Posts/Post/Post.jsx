import React from "react";

import './style.css';
// import img from "./miami.jpg";

 const Post = ({post}) => {

    const editHandler = () => {
        
    }
    return(
        <>
       <div className="card">
          
            <img className="img" src={post.selectedFile} alt="memory iamge" height={100} width={100}></img>

            <div className="create-detail">
                <h3>{post.creator}</h3>
                <h6>{post.createdAt}</h6>
            </div>

            <div className="post-detail">
                <p className="tag">#{post.tags}</p>
                <h1 className="title">{post.title}</h1>
                <p className="msg">{post.message}</p>
                <div className="btn">
                    <button className="like-btn">Like {post.likeCount} </button>
                    <button className="delete-btn">Delete</button>
                    <button className="edit-btn" onClick={()=>editHandler}>Edit</button>
                </div>
            </div>
          
       </div>
        </>
    )
}


export default Post;