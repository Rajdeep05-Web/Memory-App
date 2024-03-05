import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [showPass, setShowPass] = useState(false)
  const dispatch = useDispatch()

//form functions
  const submitHandler = (e) => {
    alert('Form Submitted')
  }

  const switchMode = (e) => {
    e.preventDefault()
    setIsSignUp((prevIsSignUp) => !prevIsSignUp)
  }

  const handleShowPassword = ()=>{
     setShowPass( (prevShowPass) => !prevShowPass )
  }

 
 //google auth success and failure functions
  const googleSuccess = (res)=>{
    const result = res?.profileObj
    const token = res?.tokenId 
    try {
      dispatch( { type: 'AUTH', data: {result, token} } )
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error)=>{
     console.log(error)
     console.log("Google OAuth failed. Try again later.")
  } 

  return (
    //add your google auth client id here. wrap the entire code in.
    <GoogleOAuthProvider clientId="16395911358-kq7dsg20ttum5gnjs9o8ohpma9jlocvb.apps.googleusercontent.com"> 

    
    <div className='auth-container'>
      <form className='auth-form' onSubmit={submitHandler}>
        <h1> {isSignUp ? "Sign Up" : "Sign In"} </h1>

        { isSignUp &&
         (
         <> <input type='text' placeholder='First Name'onChange={()=>{}} />
         <input type='text' placeholder='Last Name' onChange={()=>{}}  /></>
        )}

        <input type='email' placeholder='Email' onChange={()=>{}} />
        <input type={showPass ? "text" : "password"} placeholder='Password'  onChange={()=>{}} />
        <input type='checkbox' onClick={handleShowPassword} id='showPass'/> <label htmlFor="showPass">Show Password</label>

        { isSignUp && <input type='password' placeholder='Confirm Password' /> }

        <button type='submit'>
          { isSignUp ? 'Sign Up' : 'Sign In' }
        </button>

        <GoogleLogin
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        />

        <button onClick={switchMode}>
          {
            isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'
          }
        </button>

      </form>
    </div>

    </GoogleOAuthProvider>
    )
}

export default Auth
