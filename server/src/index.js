import dotenv from 'dotenv';
import connectDB from "./db/connection.js";
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: './.env'
})

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin : process.env.CORS_ORIGIN
}));

app.use(cookieParser());


connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`Server is connected at port : ${port}`);
    })
})
.catch( (error) => {
    console.error(`Database connection error : ${error}`);
})