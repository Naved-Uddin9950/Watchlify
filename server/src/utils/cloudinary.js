import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (filePath) => {
    try {
        const upload = await cloudinary.uploader.upload(filePath);
        console.log(`File URL : ${upload.url}`);
        return upload;
    } catch (error) {
        fs.unlinkSync(filePath);
        console.error(`Cloudinary file upload error : ${error}`);
    }
}