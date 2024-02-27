import axios from 'axios';

const url = "http://localhost:3001";

export const fetchPosts = () => axios.get(`${url}`);