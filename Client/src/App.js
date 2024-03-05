import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//components
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Components/Auth/Auth";

//style
import './App.css'



const App = () => {

  
    return (

      <BrowserRouter> 

            <div className="App">
            <div className="container">

                <Navbar />

                <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth' element={<Auth/>} />
              </Routes>
               
              

             </div>
            </div> 

      </BrowserRouter>
      
    );
}

export default App;