import React from "react";
import { useSelector } from "react-redux"; //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.

import "./style.css";//importing the css file

//components
import Post from "./Post/Post";//importing the Post component


 const Posts = () => {

    const posts = useSelector( (state) => state.posts )//using the useSelector hook to get the posts from the state store of redux
    console.log(posts);

    return(
        <>
        <div className="posts">
        <Post/>
        <Post/>
        {/* <h1>Posts</h1> */}
        </div>
        </>
    )
}

export default Posts;