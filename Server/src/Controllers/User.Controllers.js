
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//User model
import UserModel from '../Models/User.js'


export const signUp = async ( req, res) => {

  const { email, password, confirmPassword, firstName, lastName } = req.body;


  try {
    
    const existingUser = await UserModel.findOne({email});

    if(existingUser) return res.status(400).json({message: "User already exists"});//bad request

    if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});//bad request


    const hashedPassword = await bcrypt.hash(password, 12); //12 is the salt(difficulty level) //hash the password

    const result = await UserModel.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

    const token = jwt.sign({email: result.email, id: result._id}, 'secretString' , {expiresIn: "1h"});//expires in 1 hour

    res.status(200).json({result, token});


  } catch (error) {

    console.log(error);

    res.status(500).json({message: "Something went wrong"});
    
  }
}


 export const signIn = async ( req, res) => {

    const { email, password } = req.body;

    console.log(req.body);
     
    try {

      const existingUser = await UserModel.findOne({email});

      if(!existingUser) {

        console.log("User doesn't exist");//not found

        return res.status(404).json({"message" : "User doesn't exist"})

      };
      

      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

      if(!isPasswordCorrect) {

        console.log("Invalid credentials");//bad request

        return res.status(400).json({"message": "Invalid credentials"})

      };

      const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'secretString', {expiresIn: "1h"});//expires in 1 hour

      res.status(200).json({result: existingUser, token});

    } catch (error) {

        console.log(error);

        res.status(500).json({message: "Something went wrong"});
      
    }

}