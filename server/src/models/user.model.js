import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username is required'],
        unique : [true, 'Username must be unique'],
        index : true
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
    watchHistory : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Video'
    }],
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

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }
    try {
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.error(`User password hashing error : ${error}`);
    }
});

userSchema.methods.generateAccessToken = async function () {
    let token = await jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email,
            fullname : this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}

export const User = mongoose.model('User', userSchema);