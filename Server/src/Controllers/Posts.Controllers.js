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



export const createPosts = async (req, res) => {

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



export const updatePosts = async (req, res) => {

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

