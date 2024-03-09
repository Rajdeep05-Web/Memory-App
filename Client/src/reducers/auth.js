import { AUTH, LOGOUT } from '../Constants/actionTypes.js'

const authReducer = (state = {authData: null}, action) => {//initial state is an object with authData as null

    switch (action.type) {
        
        case AUTH:
            
             localStorage.setItem('profile', JSON.stringify({...action?.data}));//storing the user data in the local storage

            return {...state, authData: action?.data};

        case LOGOUT:

            localStorage.clear();//clearing the local storage when the user logs out

            return {...state, authData: null};    

        default:

            return state;    

    }
}

export default authReducer;