import React from "react";
import FileBase from "react-file-base64";//importing the FileBase component
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";//useDispatch is a hook that returns a reference to the dispatch function from the Redux store

import "./style.css";
import {createPost,  updatePostFn} from "../../actions/posts.js";

const Form = ( {updatePost, setUpdatePost} ) => {

    //usestates
    const [postData, setPostData] = useState({
         "title": '', "message": '', "tags": '', "selectedFile": ''
    })
    //dispatch instance
    const dispatch = useDispatch();//dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
    //const newUpdatedPost = useSelector((state)=> updatePost ? state.posts.find( (p)=> p._id === updatePost._id ) : null)
    
    const user = JSON.parse(localStorage.getItem('profile'));//get the user from the local storage if logged in
   
    

    useEffect(() => {//it shows the old data in the form when the post have to update
        if(updatePost){
            setPostData( updatePost);
        }
    },[updatePost])
    
    //event handler
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        if(updatePost){
      
            dispatch(updatePostFn(updatePost._id, { ...postData, name: user?.result?.name }));
            clearHandler();
            
            setUpdatePost(null);
            
            
        } else {
            
         
           dispatch(createPost({ ...postData, name: user?.result?.name}));
           clearHandler();

       }
    }



   const clearHandler = () => {
    setPostData({   "title": '', "message": '', "tags": '', "selectedFile": '' })
   }

  
 

    if(!user?.result?.name){  //if the user is not logged in
        return(
            <div className="form-contaner">
                <h2 className="no-user">Please sign in to create your own memories and like other's memories</h2>
            </div>
        )
    }
    
    return(
        
    
        <>
        <div className="form-contaner">
            <h1>{updatePost?"Update":"Create"} a Memory</h1>
            <form>
                   
                    {/* <input className="creator" type="text" id="creator" name="creator" placeholder="Creator" 
                    value={postData.creator} onChange={(e) => setPostData({...postData, "creator":e.target.value})}></input> */}

                    <input className="title" type="text" id="title" name="title" placeholder="Enter title" 
                    value={postData.title} onChange={(e) => setPostData({...postData, "title":e.target.value})}></input>
                    
                    <input  className="msg" type="text" id="message" name="message" placeholder="Enter message" 
                    value={postData.message} onChange={(e) => setPostData({...postData, "message":e.target.value})}></input>

                    <input  className="tag" type="text" id="tags" name="tags" placeholder="Enter tags" 
                    value={postData.tags} onChange={(e) => setPostData({...postData, "tags":e.target.value.split(',')})}></input>
                   
                    <div className="file"> 
                    <FileBase
                        type="file" mulitple={false} placeholder="kkk" onDone={({base64}) => setPostData({...postData, selectedFile: base64})}>
                    </FileBase>
                    </div>

                   <button type="submit" className="submit-btn" onClick={handleSubmit}> Submit</button>
                   <button type="clear" className="clear-btn" onClick={clearHandler}>Clear</button>
                   
            </form> 
        </div>
        </>
    )
    }


export default Form;