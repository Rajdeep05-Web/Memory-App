import React from 'react';
import {useNavigate} from 'react-router-dom';

//images
import memories from "../../images/memories.png";
//style
import './style.css';

const Navbar = () => {

 const user = null;
 const navigate = useNavigate();//useNavigate is a hook from react-router-dom.
 
 
 const Auth = () => {
       
        
        
        //use it liek this
        navigate('/auth')//this will take you to the auth page
    }

    return (
        <section className="app-bar">
        <h1 className="app-heading">Memories</h1>
        <img src={memories} alt="Memories"></img>
        <section>
            {
                user ? (
                    <div>
                       
                    </div>
                ) : (
                   
                        <button onClick={Auth}>Sign In</button>
                 
                )
            }
        </section>
     </section>
    )
}

export default Navbar;