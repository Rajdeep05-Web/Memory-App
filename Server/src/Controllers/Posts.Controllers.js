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



export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new PostMessageModel(post);

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

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');//check if the id is valid

   try {

      const post = await PostMessageModel.findById(_id);
      const updatedPost = await PostMessageModel.findByIdAndUpdate(
         {_id},
         {likeCount : post.likeCount + 1},//increment like count by 1
         {new: true}//returns updated post
      )

      res.status(200).json(updatedPost);
      
   } catch (error) {

      console.log(error);

      res.status(404).json({message: error.message});
      
   }
}

