import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//components
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

//style
import './App.css'



const App = () => {
   
    //const user = JSON.parse( localStorage.getItem('profile') )//get the user from the local storage and then parse it to a javascript object using JSON

    return (

      <BrowserRouter> 

            <div className="App">
            <div className="container">

               

                <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth' element={ <Auth/> } />
                <Route path='/posts/search' element={ <Home/> } />
              </Routes>
               
              

             </div>
            </div> 

      </BrowserRouter>
      
    );
}

export default App;