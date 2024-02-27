import React from "react";

import "./style.css";

const Form = () => {
    return(
        <>
        {/* <h1>Form</h1> */}
        <div className="form-contaner">
            <h1>Create a Memory</h1>
            <form>
                   
                    <input className="title" type="text" id="title" name="title" placeholder="Enter title"></input>
                    
                    <input  className="msg" type="text" id="message" name="message" placeholder="Enter message"></input>
                    <input  className="tag" type="text" id="tags" name="tags" placeholder="Enter tags"></input>
                   
                    <input type="file" className="image" name="image"></input>
                <button type="submit" className="submit-btn"> Submit</button>
                <button type="clear" className="clear-btn">Clear</button>
            </form>
        </div>
        </>
    )
}

export default Form;