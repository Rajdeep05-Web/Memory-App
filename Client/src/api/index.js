import axios from 'axios';

const url = "http://localhost:3001/get";//

export const fetchPosts = () => axios.get(`${url}`);//fetching posts from the api