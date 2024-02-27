
//posts state is an array of posts and the action is an object that has a type and payload(data)
//posts state is initialized to an empty array bc if there are no posts, the app should not crash
const reducer = (posts = [], action) =>  {
   switch(action.type){
      case 'FETCH_ALL':
        return posts;
      case 'CREATE':
        return posts;
      default:
        return posts;
   }
}

export default reducer;