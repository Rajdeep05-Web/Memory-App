import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

//google auth import
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'

//style
import './style.css'
import {GOOGLE_CLIENT_ID} from '../../Constants/basicConstants'
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
  
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}> 

    
    <div className='auth-container'>

      <form className='auth-form' onSubmit={submitHandler} >
      
        <h1 className='form-heading'> {isSignUp ? "Sign Up" : "Sign In"} </h1>

        { isSignUp &&
         (
         <> <input type='text' placeholder='First Name' name='firstName' onChange={hadleChange} />
         <input type='text' placeholder='Last Name' name='lastName' onChange={hadleChange}  /></>
        )}

        <input type='email' placeholder='Email' name='email' onChange={hadleChange} />

        <div className="pass-container">
        <input type={showPass ? "text" : "password"} placeholder='Password' className='pass' name='password' required onChange={hadleChange} />
        {/* <input type='checkbox' onClick={handleShowPassword} id='showPass' className='pass-visibility'/>  */}
        {/* <label htmlFor="showPass">Show Password</label> */}
        </div>

        { isSignUp &&
         <div className="pass-container">
        <input type={showPass ? "text" : "password"} name='confirmPassword' className='pass' placeholder='Confirm Password' required onChange={hadleChange}/>
        {/* <input type='checkbox' onClick={handleShowPassword} id='confirmShowPass' className='pass-visibility'/>  */}
         </div>
        // <label htmlFor="showPass">Show Password</label>/> 
        }

        <button type='submit' className='submit-form'> { isSignUp ? 'Sign Up' : 'Sign In' } </button>
       
       <div className="Oauth">

        <GoogleLogin
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign In</button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
        />
       </div>
      
    


        <button className='alternate-btn' onClick={switchMode}> { isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up' } </button>

      </form>
    </div>

    </GoogleOAuthProvider>
    )
}

export default Auth
