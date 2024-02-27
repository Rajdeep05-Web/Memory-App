import express from "express";
import {getPosts, createPosts} from '../Controllers/Posts.Controllers.js'
const router = express.Router();

router.get('/get',getPosts)

router.post('/post',createPosts)

export default router;