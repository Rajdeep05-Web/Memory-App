import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

//components
import Posts from "../Posts/Posts";
import Form from "../Forms/Form";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

//style
import './style.css'

//redux actions
import {getPosts} from "../../actions/posts";

const Home = () => {

    const [updatePost, setUpdatePost] = useState(null);//state to store the post to be updated
 
    const dispatch = useDispatch();
    
    //importent
    useEffect(() => {//useEffect to dispatch action when the component mounts
      dispatch(getPosts());//it dispatches the getPosts action to get the posts from the server and updates the state of the redux store. So then the useSelector hook in the Posts component can get the posts from the state store of redux.
    });//no dependency array means it will run only once when the component mounts(rendered for the first time) and on every re-render
  
  
    return(
     <>

        <Navbar />  

        <section className="app-body">

          <section className="posts">

            <Posts setUpdatePost={setUpdatePost} />

          </section>

          <section className="form">

            <Search />

            <Form updatePost={updatePost} setUpdatePost={setUpdatePost}/>

          </section>

        </section>

        </>
    )
}

export default Home;