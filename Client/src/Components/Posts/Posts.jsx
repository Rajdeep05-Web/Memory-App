import React from "react";
import { useSelector } from "react-redux"; //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.

//import "./Posts.css";//importing the css file

//components
import Post from "./Post/Post";//importing the Post component


 const Posts = () => {

    const posts = useSelector( (state) => state.posts )
    console.log(posts);

    return(
        <>
        <Post/>
        <Post/>
        {/* <h1>Posts</h1> */}
        </>
    )
}

export default Posts;