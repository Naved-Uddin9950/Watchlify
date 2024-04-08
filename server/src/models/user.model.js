import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username is required'],
        unique : [true, 'Username must be unique']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : [true, 'Email must be unique']
    },
    fullname : {
        type : String,
        required : [true, 'Name is required']
    },
    watchHistory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Video'
    },
    avatar : {
        type : String
    },
    coverImage : {
        type : String
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
    },
    refreshToken : {
        type : String
    }

}, {timestamps: true});

export const User = mongoose.model('User', userSchema);