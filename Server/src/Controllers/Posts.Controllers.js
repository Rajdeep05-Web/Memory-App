
import PostMessageModel from "../Models/PostMessage.js";
import mongoose from "mongoose";


export const getPosts =async (req, res) => { 
   try {
     const postMessages = await PostMessageModel.find();
        res.send(postMessages).status(200);
      
   } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
   }
}

export const getPostsBySearch = async (req, res) => {

   const {searchQuery} = req.query;
   try {
      // console.log(typeof(searchQuery))
      //reg. expression to search for the title in any character case
      const title = new RegExp(searchQuery, "i");//i -> case insensitive

      const posts = await PostMessageModel.find({ $or: [ {title}, {tags: { $in: searchQuery.split(",") } } ] }); //searching for the title and tags in the posts

       console.log(posts);

      res.json(posts).status(200);

   } catch (error) {

      console.log(error);
      res.status(404).json({message: error});
      
   }
}

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new PostMessageModel( { ...post, creator: req.userId, createdAt:new Date(), } );

    try {

        await newPost.save();

        res.status(201).json(newPost); 
     
      } catch (error) {

       console.log(error);

       res.status(400).json({message : error.message})
       
      }
}



export const updatePost = async (req, res) => {

    const {id : _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {return res.status(404).send('No post with that id')};//check if the id is valid

   try {
    const updatedData = await PostMessageModel.findOneAndUpdate( {_id}, post, 
      {new: true}//return the new data
    )

    res.json(updatedData).status(200);
   } catch (error) {
      console.log(error);
      res.status(404).json({message: error.message});
    
   }

}

export const deletePost = async (req, res) => {

   const {id : _id} = req.params;

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');//check if the id is valid

   try {
      const deletedPost = await PostMessageModel.findByIdAndDelete(_id);

      if(deletedPost){ res.json(deletedPost).status(200); 

      } else { res.status(400).json({message: 'Post not found'}); }
      
   } catch (error) {

      console.log(error);

      res.status(404).json({message: error.message});

   }
}

export const likePost = async (req, res) => {

   const  { id :_id } = req.params;

   if(!req.userId) return res.json({message: 'Unauthenticated'});//check if the user is authenticated (logged in)

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');//check if the id is valid

   try {

   const post = await PostMessageModel.findById(_id);

   const index = post.likes.findIndex((id) => id === req.userId);//check if the user has already liked the post

   if(index === -1){//if the user not ound in the likes[]

      //user havnt liked the post so far -> so now user clicked btn to like
      post.likes.push(req.userId);

   } else {

      //user liked once -> so now user clicked btn to unlike
      post.likes = post.likes.filter( (id)=> id !== req.userId )

   }

   const updatedPost = await PostMessageModel.findByIdAndUpdate(
         _id,//criteria
         post,//update the post by new post with updated likes
         {new: true}//returns updated post
      )

      res.status(200).json(updatedPost);
      
   } catch (error) {

      console.log(error);

      res.status(404).json({message: error.message});
      
   }
}

