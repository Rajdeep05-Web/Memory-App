import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchPostFn } from '../../actions/posts';

import { useDispatch } from "react-redux";

import "./style.css";//importing the css file

// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// }//useLocation is a hook from react-router-dom to get the location object and then we use URLSearchParams to get the query from the url

const Search = () => {

    const dispatch = useDispatch();
    // const query = useQuery();//useQuery is a custom hook to get the query from the url
    const navigate = useNavigate();//useNavigate is a hook from react-router-dom to navigate to a different route
    // const page = query.get("page") || 1;//getting the page number from the url or setting it to 1
    // const searchQuery = query.get("searchQuery");//getting the search query from the url

    const [searchTerm, setSearchTerm] = useState("");//state to store the search query
    
    const searchPost = () => {
      
        if(searchTerm.trim()){

            //dispatching the action to search the posts
            dispatch(searchPostFn(searchTerm));

            navigate(`/posts/search?searchQuery=${searchTerm}`);//navigating to the search page with the search query in the url

        } else{

            navigate("/")//if the search query is empty then navigate to the home page

        }

    }
   

    return(
        <>

        <div className="search-container">

            <input type="text" placeholder="search by title or tags" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} />

            <button onClick={ searchPost }>Search</button>
            
        </div>

        </>
    )
}

export default Search;