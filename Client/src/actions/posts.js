import * as api from '../api';//importing everything from api folder

// Action Creators
export const getPosts = () => async (dispatch) => {//getPosts is a function that returns another function that takes in dispatch as an argument
    try {
        const {data} = api.fetchPosts();//fetching posts from the api
        dispatch({type : "FETCH_ALL", payload: data});//dispatching an action with type and payload
    } catch (error) {
        console.log(error.message);
    }

}