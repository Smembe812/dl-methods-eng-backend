const cloudinary = require('cloudinary').v2
const makeUploadImage = require('./claudinary.factory')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
    console.warn('!! cloudinary config is undefined !!');
    console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
    cloudinary.config(
        { 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET 
        }
    );
}

const uploadImage = makeUploadImage({cloudinary})

module.exports = {
    uploadImage
}