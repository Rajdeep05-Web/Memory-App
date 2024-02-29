import axios from 'axios';

const url = "http://localhost:3001/post";

export const fetchPosts = () => axios.get(url);//fetching posts from the api

export const createPosts = (newPost) => axios.post(url, newPost);//Creating posts from the api