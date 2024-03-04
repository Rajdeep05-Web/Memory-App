import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3001;



//imports from local 
import connectDB from './src/DB/index.js';

//import routes
import PostsRoute from './src/Routes/Posts.Route.js';

//middlewares
const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


app.use(PostsRoute);

app.get('/',PostsRoute);
app.post('/',PostsRoute);













// app.get('/', (req, res) => {
//     res.send('Hello World');
// })


if (connectDB()) 
    {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })

    }
