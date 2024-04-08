import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    videoFile : {
        type : String
    },
    thumbnail : {
        type : String
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        required : [true, 'Title is required']
    },
    description : {
        type : String,
    },
    duration : {
        type : number
    },
    views : {
        type : number,
        required : [true, 'Views is required'],
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : false
    }
}, {timestamps: true});

export const Video = mongoose.model('Video', videoSchema);