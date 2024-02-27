import mongoose from "mongoose";

const URI = "mongodb://localhost:27017";
const DB_NAME = "Memory App";

const connectDB = async () => {
    mongoose.connect(`${URI}/${DB_NAME}`)
.then(() => {
    console.log("Connected to the database");
})
.catch((error) => {
    console.log("An error occurred: ", error);
})
}

export default connectDB;


