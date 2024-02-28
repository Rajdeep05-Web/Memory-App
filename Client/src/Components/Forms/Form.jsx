import React from "react";
import FileBase from "react-file-base64";//importing the FileBase component
import { useState } from "react";

import "./style.css";

const Form = () => {

    const {postData, setPostData} = useState({
        creator:'' , title: '', message: '', tags: '', selectedFile: ''
    })

   //event handler
   const handleSubmit = () => {}
   const clearHandler = () => {}
   const submitHandler = () => {}

    return(
        <>
        {/* <h1>Form</h1> */}
        <div className="form-contaner">
            <h1>Create a Memory</h1>
            <form onSubmit={handleSubmit}>
                   
                    <input className="creator" type="text" id="creator" name="creator" placeholder="Creator"></input>
                    <input className="title" type="text" id="title" name="title" placeholder="Enter title"></input>
                    
                    <input  className="msg" type="text" id="message" name="message" placeholder="Enter message"></input>
                    <input  className="tag" type="text" id="tags" name="tags" placeholder="Enter tags"></input>
                   
                    <div className="file"> 
                    <FileBase>
                        type="file" mulitple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
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