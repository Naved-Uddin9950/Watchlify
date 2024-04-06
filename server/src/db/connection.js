import dotenv from 'dotenv';
import { DB_NAME } from "../constants.js";
import mongoose from 'mongoose';

dotenv.config({
    path: './.env'
})

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${DB_URI}/${DB_NAME}`);
        console.log('Database connected !!!');
    } catch (error) {
        console.error(`\n MongoDB Connection Error : ${error}`);
        process.exit(1);
    }
}

export default connectDB;