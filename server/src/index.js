import dotenv from 'dotenv';
import connectDB from "./db/connection.js";
import express from 'express';

dotenv.config({
    path: './.env'
})

const app = express();
const port = process.env.PORT || 8080;

connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`Server is connected at port : ${port}`);
    })
})
.catch( (error) => {
    console.error(`Database connection error : ${error}`);
})