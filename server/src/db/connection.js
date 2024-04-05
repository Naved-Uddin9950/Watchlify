import { DB_NAME } from "../constants.js";
import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017';

const connectDB = async () => {
    try {
        mongoose.connect(`${DB_URI}/${DB_NAME}`);
        console.log('Database connected !!!');
    } catch (error) {
        console.error("\n MongoDB Connection Error : ", error);
        process.exit(1);
    }
}

export default connectDB;