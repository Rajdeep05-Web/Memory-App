import express from "express";
const router = express.Router();

import {getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch} from '../Controllers/Posts.Controllers.js'

import auth from '../Middleware/auth.js'

router.get('/get',getPosts)//get posts

router.get('/posts/search',getPostsBySearch)//search posts

router.post('/post',auth, createPost)//create post

router.patch('/update/:id',auth, updatePost)//update post

router.delete('/delete/:id',auth, deletePost)//delete post

router.patch('/likePost/:id',auth, likePost)//update post

export default router;