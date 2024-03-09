import axios from 'axios';

// const url = "http://localhost:3001/post";

//post APIs
export const fetchPosts = () => axios.get("http://localhost:3001/get");//fetching posts from the api

export const createPosts = (newPost) => axios.post("http://localhost:3001/post", newPost);//Creating posts from the api

export const updatePosts = (id, post) => axios.patch(`http://localhost:3001/update/${id}`, post);//Updating posts from the api

export const deletePosts = (id) => axios.delete(`http://localhost:3001/delete/${id}`);//Deleting posts from the api

export const likePosts = (id) => axios.patch(`http://localhost:3001/likePost/${id}`);//Liking posts from the api


//user auth APIs
export const signInAPI = (formData) => axios.post("http://localhost:3001/signin", formData)//Signing in from the api

export const signUpAPI = (formData) => axios.post("http://localhost:3001/signup", formData)//Signing up from the api