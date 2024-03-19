import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../Constants/actionTypes.js'


//posts state is an array of posts and the action is an object that has a type and payload(data)
//posts state is initialized to an empty array bc if there are no posts, the app should not crash
const reducer = (posts = [], action) =>  {
   switch(action.type){
      case UPDATE:
        return posts.map((post) => post._id === action.payload._id ? action.payload : post);
      case FETCH_ALL:
        return action.payload;
      case FETCH_BY_SEARCH:
        return action.payload;
      case CREATE:
        return [...posts, action.payload];
      case DELETE:
        return posts.filter( (post) => post._id !== action.payload );//return all the posts that are not the one that was deleted
      case LIKE:
        return posts.map( (post) => post._id === action.payload._id ? action.payload : post);
      default:
        return posts;
   }
}

export default reducer;