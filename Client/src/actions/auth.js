import { AUTH } from '../Constants/actionTypes.js'
import * as api from '../api';



//action creators for user authentication

export const userSignIn = (formData, navigate) => async (dispatch) => {
 
    try {
        
        const  { data }  = await api.signInAPI(formData);//Signing in from the api

        dispatch( { type: AUTH, data } );//dispatching an action with type and payload

        navigate('/')//redirecting to the home page

    } catch (error) {

        console.log(error);
        
    }
}


export const userSignUp = (formData, navigate) => async (dispatch) => {

    try {

        const { data } = await api.signUpAPI(formData);//Signing up from the api
    
        dispatch( { type : AUTH, data } );//dispatching an action with type and payload
    
        navigate('/')//redirecting to the home page
    
    } catch (error) {
        
        console.log(error);

    }
}