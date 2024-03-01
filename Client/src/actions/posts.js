import * as api from '../api';//importing everything from api folder

//Definition -->
//Action Creators: Normally, action creators in Redux return plain action objects, which have a type property describing the action type and optionally a payload property with data. With Redux Thunk, action creators can return functions.

//Usage in the code -->

// Action Creators - Used thunk to make async requests. Without thunk, we would not be able to make async requests.
//Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch
//of an action, or to dispatch only if a certain condition is met.
export const getPosts = () => async (dispatch) => {//getPosts is a function that returns another function that takes in dispatch as an argument
//this is a action creator function
    try {

        const {data} =await api.fetchPosts();//fetching posts from the api

        dispatch({type : "FETCH_ALL", payload: data});//dispatching an action with type and payload

    } catch (error) {

        console.log(error.message);
    }

}


export const createPost = (post) => async (dispatch) => {
try {

    const {data} = await api.createPosts(post);//Creating posts from the api

    dispatch({type: "CREATE", payload: data});
    
} catch (error) {
    
    console.log(error.message);
    
}

}

export const updatePostFn = (_id, postData) => async (dispatch) => {

  try {

    const {data} = await api.updatePosts(_id, postData);//Updating posts from the api

    console.log("data after update",data);

    dispatch({type: "UPDATE", payload:data});

  } catch (error) {

    console.log(error.message);
    
  }

}
export const deletePostFn = (_id) => async (dispatch) => {

  try {

    const {data} = await api.deletePosts(_id);//Updating posts from the api

    console.log("ssss",data);

    dispatch({type: "DELETE", payload:data._id});

  } catch (error) {

    console.log(error.message);
    
  }

}