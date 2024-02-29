import axios from 'axios';

// const url = "http://localhost:3001/post";

export const fetchPosts = () => axios.get("http://localhost:3001/get");//fetching posts from the api

export const createPosts = (newPost) => axios.post("http://localhost:3001/post", newPost);//Creating posts from the api