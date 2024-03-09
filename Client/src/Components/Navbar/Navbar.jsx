import React, { useState,useEffect } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//images
import memories from "../../images/memories.png";
//style
import './style.css';

const Navbar = () => {
    

const [user, setUser] = useState(null);//getting the user from the local storage

 const navigate = useNavigate();//useNavigate is a hook from react-router-dom.
 const location = useLocation();//useLocation -> returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.
 const dispatch = useDispatch();//useDispatch is a hook from react-redux.

 useEffect(() => {

     setUser(JSON.parse(localStorage.getItem('profile')))//getting the user from the local storage

 },[location])//whenever the location changes the useEffect will run

 const Auth = () => {
        
        navigate('/auth')//this will take you to the auth page
    }
    const handlelogout = () => {
        dispatch({type: 'LOGOUT'});//dispatching an action with type LOGOUT
        setUser(null);//setting the user to null
    }

    return (
        <section className="app-bar">
          <div className='app-heading'>

            <h1>Memories</h1>
            <img src={memories} alt="Memories"></img>

          </div>    
          <section className='nav-content'>
            {
                user ? (
                       <div className='logged-in'>

                        <h3 id='user-name'>{user.result.name}</h3>
                       
                        <button onClick={handlelogout} className='logout-btn btn'>Log out</button>
                 
                       </div>
                ) : (
                   
                        <button onClick={Auth} className='sign-btn btn'>Sign In</button>
                 
                )
            }
          </section>
     </section>
    )
}

export default Navbar;