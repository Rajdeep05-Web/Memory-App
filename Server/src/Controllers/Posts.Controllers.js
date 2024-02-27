import PostMessageModel from "../Models/PostMessage.js";



export const getPosts =async (req, res) => {
   try {
     const postMessages = await PostMessageModel.find();
        res.send(postMessages)
        res.status(200).json(postMessages);
   } catch (error) {
    console.log(error);
    res.status(404).json({message: error.message});
   }
}


export const createPosts =async (req, res) => {

    const post = req.body;

    const newPost =new PostMessageModel(post);

    try {

        await newPost.save();

        res.status(201).json(newPost); 
     
      } catch (error) {

       console.log(error);

       res.status(400).json({message : error.message})
       
      }
}

