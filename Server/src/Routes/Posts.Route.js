import express from "express";
import {getPosts, createPosts, updatePosts, deletePosts} from '../Controllers/Posts.Controllers.js'
const router = express.Router();

router.get('/get',getPosts)//get posts

router.post('/post',createPosts)//create post

router.patch('/update/:id', updatePosts)//update post

router.delete('/delete/:id', deletePosts)//delete post


export default router;