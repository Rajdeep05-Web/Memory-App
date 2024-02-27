import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3000;

//imports from local 
import connectDB from './src/DB/index.js';

//import routes
import testRoute from './src/Routes/test.route.js';

//middlewares
const app = express();

app.use(bodyParser.json())
app.use(cors());


app.use(testRoute);

app.get('/',testRoute);













// app.get('/', (req, res) => {
//     res.send('Hello World');
// })


if (connectDB()) 
    {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })

    }
