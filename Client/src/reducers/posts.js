import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, FETCH_POST} from '../Constants/actionTypes.js'


//posts state is an array of posts and the action is an object that has a type and payload(data)
//posts state is initialized to an empty array bc if there are no posts, the app should not crash
const reducer = (state = { posts : [] } , action) =>  {
   switch(action.type){
      case UPDATE:
        return {...state, posts : state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
      case FETCH_ALL:
        return {...state, posts : action.payload};
      case FETCH_BY_SEARCH:
        return {...state, posts : action.payload};
      case FETCH_POST:
        return {...state, post : action.payload};
      case CREATE:
        return {...state, posts : [...state.posts, action.payload]};
      case DELETE:
        return {...state, posts : state.posts.filter( (post) => post._id !== action.payload )};//return all the posts that are not the one that was deleted
      case LIKE:
        return {...state, posts : state.posts.map( (post) => post._id === action.payload._id ? action.payload : post)};
      default:
        return state;
   }
}

export default reducer;