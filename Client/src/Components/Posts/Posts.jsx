import React from "react";
import { useSelector } from "react-redux"; //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.


import "./style.css";//importing the css file

//components
import Post from "./Post/Post";//importing the Post component


 const Posts = ({setUpdatePost}) => {

    //using the useSelector hook to get the posts from the state store of redux(where the all posts are stored in redux )(redux main facility)
    const posts = useSelector( (state) => state.posts )
   

    return(
        <>
        <div className="posts">

            {posts===null && <div className="loader-container"> <div class="loader"></div> </div>}
            
         {  
            posts.length === 0 ? 
            <h1 className="no-post">No posts</h1>
             :
             posts.map( (post)=><Post post={post} key={post._id} setUpdatePost={setUpdatePost}/> )
         }
        
        </div>
        </>
    )
}

export default Posts;