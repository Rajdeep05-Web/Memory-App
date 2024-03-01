import express from "express";
import {getPosts, createPosts, updatePosts} from '../Controllers/Posts.Controllers.js'
const router = express.Router();

router.get('/get',getPosts)//get posts

router.post('/post',createPosts)//create post

router.patch('/update/:id', updatePosts)//update post

export default router;