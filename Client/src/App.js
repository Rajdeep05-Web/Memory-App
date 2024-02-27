import React from "react";

import memories from "./images/memories.png";

//components
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Forms/Form";

import './App.css'

const App = () => {
    return (
            <div className="App">
            <div className="container">
                <section className="app-bar">
                   <h1 className="app-heading">Memories</h1>
                   <img src={memories} alt="Memories"></img>
                </section>
                <section className="body">
                    <section className="details">
                    <p>Memories is a simple social media app that allows users to post interesting events that happened in their lives. Users can also like and comment on posts.</p>
                    </section>
                    <section className="posts">
                      <Posts/>
                    </section>
                    <section className="form">
                      <Form/>

                    </section>

                </section>
             </div>
            </div>
      
    );
}

export default App;