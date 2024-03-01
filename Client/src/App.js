import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import memories from "./images/memories.png";

//components
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Forms/Form";

import './App.css'

//redux actions
import {getPosts} from "./actions/posts";


//redux dispatch action

const App = () => {

  const [updatePost, setUpdatePost] = useState(null);//state to store the post to be updated
 

  const dispatch = useDispatch();
  

  //importent
  useEffect(() => {//useEffect to dispatch action when the component mounts
    dispatch(getPosts());//it dispatches the getPosts action to get the posts from the server and updates the state of the redux store. So then the useSelector hook in the Posts component can get the posts from the state store of redux.
  });//no dependency array means it will run only once when the component mounts(rendered for the first time) and on every re-render


  
    return (
            <div className="App">
            <div className="container">
                <section className="app-bar">
                   <h1 className="app-heading">Memories</h1>
                   <img src={memories} alt="Memories"></img>
                </section>
                <section className="app-body">
                    <section className="posts">
                      <Posts setUpdatePost={setUpdatePost} />
                    </section>
                    <section className="form">
                      <Form updatePost={updatePost} setUpdatePost={setUpdatePost}/>
                    </section>
                </section>


             </div>
            </div>
      
    );
}

export default App;