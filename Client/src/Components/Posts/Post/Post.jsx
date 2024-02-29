import React from "react";

import './style.css';
import img from "./miami.jpg";

 const Post = ({post}) => {
    return(
        <>
       <div className="card">
          
            <img className="img" src={img} alt="memory iamge" height={100} width={100}></img>
            <div className="create-detail">
                <h3>Raj</h3>
                <h6>2024</h6>
            </div>
            <div className="post-detail">
            <p className="tag">#miami</p>
            <h1 className="title">miami trip</h1>
            <p className="msg">Had funnn</p>
            <div className="like-comment"></div>
            </div>
          
       </div>
        </>
    )
}


export default Post;