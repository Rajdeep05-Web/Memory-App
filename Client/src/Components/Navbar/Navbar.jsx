import React, { useState,useEffect } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {jwtDecode} from 'jwt-decode';

//images
import memories from "../../images/memories.png";
//style
import './style.css';

// import {getPosts} from '../../actions/posts';

const Navbar = () => {
    

const [user, setUser] = useState(null);//getting the user from the local storage

 const navigate = useNavigate();//useNavigate is a hook from react-router-dom.
 const location = useLocation();//useLocation -> returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.
 const dispatch = useDispatch();//useDispatch is a hook from react-redux.

 //log in
 const Auth = () => {
   
   navigate('/auth')//this will take you to the auth page
  }

  //log out the user
  const handlelogout = () => {

    dispatch({type: 'LOGOUT'});//dispatching an action with type LOGOUT

    setUser(null);//setting the user to null

    window.location.reload();

  }


  //getting the user from the local storage when the url changes auth to home page after signpu/login
  useEffect(() => {

     setUser(JSON.parse(localStorage.getItem('profile')))//getting the user from the local storage

  },[location])//whenever the location changes the useEffect will run
    
    //token expiration
    useEffect(()=>{

      const token = user?.token;//getting the token from the user

      if(token){

        const decodedToken = jwtDecode(token);//decoding the token

        // console.log(decodedToken.exp * 1000);
        // console.log(new Date().getTime());

         if(decodedToken.exp*1000 < new Date().getTime()){

            handlelogout();//if the token is expired then logout the user
            alert('Your session has expired. Please login again');
            Auth();

         }

      }

    })

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
                       
                        <button onClick={handlelogout} className='btn logout-btn '>Log out</button>
                 
                       </div>
                ) : (
                   
                        <button onClick={Auth} className='sign-btn btn'>Sign Up</button>
                 
                )
            }
          </section>
     </section>
    )
}

export default Navbar;