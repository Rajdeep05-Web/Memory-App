import axios from 'axios';



const API = axios.create({ baseURL: 'http://localhost:3001' }); //creating an instance of axios to make requests to the server


//interceptors - Interceptors are methods which are triggered before or after the main method is executed. (Types : request and response interceptors)
API.interceptors.request.use((req) => {

    if(localStorage.getItem('profile')){//if the user is logged in

        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;//we set the token in the headers

    }

    return req;
})

//post APIs
export const fetchPosts = () => API.get("/get");//fetching posts from the api

export const createPosts = (newPost) => API.post("/post", newPost);//Creating posts from the api

export const updatePosts = (id, post) => API.patch(`/update/${id}`, post);//Updating posts from the api

export const deletePosts = (id) => API.delete(`/delete/${id}`);//Deleting posts from the api

export const likePosts = (id) => API.patch(`/likePost/${id}`);//Liking posts from the api


//user auth APIs
export const signInAPI = (formData) => API.post("/signin", formData)//Signing in from the api

export const signUpAPI = (formData) => API.post("/signup", formData)//Signing up from the 