import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3001;



//imports from local 
import connectDB from './src/DB/index.js';

//import routes
import PostsRoute from './src/Routes/Posts.Route.js';
import UserRoute from './src/Routes/User.Route.js';
import User from './src/Models/User.js';

//middlewares
const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

//posts route
app.use(PostsRoute);

app.get('/',PostsRoute);
app.post('/',PostsRoute);
app.patch('/',PostsRoute);
app.delete('/',PostsRoute);
app.patch('/',PostsRoute);


//user route
app.use(UserRoute);

// app.get('/',UserRoute);
// app.post('/',UserRoute);














// app.get('/', (req, res) => {
//     res.send('Hello World');
// })


if (connectDB()) 
    {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })

    }
