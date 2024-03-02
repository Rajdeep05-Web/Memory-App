import express from "express";
import {getPosts, createPost, updatePost, deletePost, likePost} from '../Controllers/Posts.Controllers.js'
const router = express.Router();

router.get('/get',getPosts)//get posts

router.post('/post',createPost)//create post

router.patch('/update/:id', updatePost)//update post

router.delete('/delete/:id', deletePost)//delete post

router.patch('/likePost/:id', likePost)//update post

export default router;