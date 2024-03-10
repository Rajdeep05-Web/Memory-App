import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
   
    const token = req.headers.authorization?.split(" ")[1];//Bearer <token>

    const isCustomAuth = token?.length < 500;

    try {

        if(isCustomAuth && token){

            const decodedData = jwt.verify(token, 'secretString');//if it's our own token
    
            req.userId = decodedData?.id;//if the token is valid, we set the userId in the request
    
        } else{
    
            const decodedData = jwt.decode(token);//if it's google auth token
    
            req.userId = decodedData?.sub;//if the token is valid, we set the userId in the request
            //sub is the google's name for the id
    
        }

        next();//we call next to move on to the next middleware
        
    } catch (error) {//if the token is invalid
        
        console.log(error);

    }
}

export default auth;