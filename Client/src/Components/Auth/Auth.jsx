import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

//google auth import
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'

//style
import './style.css'

//actions
import {userSignIn, userSignUp} from '../../actions/auth';

 
const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(true)
  const [showPass, setShowPass] = useState(false)
  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})

  const dispatch = useDispatch()
  const navigate = useNavigate()

 //form submit handler
  const submitHandler = (e) => {

    e.preventDefault()

    if(isSignUp){
      dispatch(userSignUp(formData, navigate))
    } else {
      dispatch(userSignIn(formData, navigate))
    }

}

  //switch between sign in and sign up
  const switchMode = (e) => {

    e.preventDefault()
    setIsSignUp( (prevIsSignUp) => !prevIsSignUp )

  }

  //show password
  const handleShowPassword = ()=>{

     setShowPass( (prevShowPass) => !prevShowPass )

  }

  //handle form data change
  const hadleChange = (e)=>{
   
     setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    
 //google auth success and failure functions
  const googleSuccess =async (res)=>{
    console.log(res)

    const decodedData = jwtDecode(res?.credential)
    
    const result = decodedData
    const token = res?.credential 

    try {

      dispatch( { type: 'AUTH', data: {result, token} } )

      navigate('/')

    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure =async (error)=>{
     console.log(error)
     console.log("Google OAuth failed. Try again later.")
  } 



  return (
  
    <GoogleOAuthProvider clientId="16395911358-kq7dsg20ttum5gnjs9o8ohpma9jlocvb.apps.googleusercontent.com"> 

    
    <div className='auth-container'>

      <form className='auth-form' onSubmit={submitHandler} >
      
        <h1> {isSignUp ? "Sign Up" : "Sign In"} </h1>

        { isSignUp &&
         (
         <> <input type='text' placeholder='First Name' name='firstName' onChange={hadleChange} />
         <input type='text' placeholder='Last Name' name='lastName' onChange={hadleChange}  /></>
        )}

        <input type='email' placeholder='Email' name='email' onChange={hadleChange} />
        <input type={showPass ? "text" : "password"} placeholder='Password'  name='password' required onChange={hadleChange} />
        <input type='checkbox' onClick={handleShowPassword} id='showPass'/> <label htmlFor="showPass">Show Password</label>

        { isSignUp && <input type={showPass ? "text" : "password"} name='confirmPassword'  placeholder='Confirm Password' required onChange={hadleChange}/> }
        <input type='checkbox' onClick={handleShowPassword} id='confirmShowPass'/> <label htmlFor="showPass">Show Password</label>

        <button type='submit'> { isSignUp ? 'Sign Up' : 'Sign In' } </button>
       
        <GoogleLogin
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign In</button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
        />
      
    


        <button onClick={switchMode}> { isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up' } </button>

      </form>
    </div>

    </GoogleOAuthProvider>
    )
}

export default Auth
