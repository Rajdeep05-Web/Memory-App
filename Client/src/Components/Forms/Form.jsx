import React from "react";
import FileBase from "react-file-base64";//importing the FileBase component
import { useState } from "react";
import { useDispatch } from "react-redux";//useDispatch is a hook that returns a reference to the dispatch function from the Redux store

import "./style.css";
import {createPost} from "../../actions/posts.js";

const Form = () => {

    const [postData, setPostData] = useState({
        "creator":'' , "title": '', "message": '', "tags": [], "selectedFile": ''
    })
    const dispatch = useDispatch();//dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

   //event handler
   const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(createPost(postData));
   }
   const clearHandler = () => {}
   const submitHandler = () => {}

    return(
        <>
        {/* <h1>Form</h1> */}
        <div className="form-contaner">
            <h1>Create a Memory</h1>
            <form onSubmit={handleSubmit}>
                   
                    <input className="creator" type="text" id="creator" name="creator" placeholder="Creator" 
                    value={postData.creator} onChange={(e) => setPostData({...postData, "creator":e.target.value})}></input>

                    <input className="title" type="text" id="title" name="title" placeholder="Enter title" 
                    value={postData.title} onChange={(e) => setPostData({...postData, "title":e.target.value})}></input>
                    
                    <input  className="msg" type="text" id="message" name="message" placeholder="Enter message" 
                    value={postData.message} onChange={(e) => setPostData({...postData, "message":e.target.value})}></input>

                    <input  className="tag" type="text" id="tags" name="tags" placeholder="Enter tags" 
                    value={postData.tags} onChange={(e) => setPostData({...postData, "tags":e.target.value})}></input>
                   
                    <div className="file"> 
                    <FileBase
                        type="file" mulitple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}>
                    </FileBase>
                    </div>

                   <button type="submit" className="submit-btn" onClick={submitHandler}> Submit</button>
                   <button type="clear" className="clear-btn" onClick={clearHandler}>Clear</button>
            </form> 
        </div>
        </>
    )
}

export default Form;