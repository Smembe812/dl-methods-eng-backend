const cloudinary = require('cloudinary').v2
const makeUploadImage = require('./upload-image')
const makeDeleteImage = require('./delete-image')
const makeGetAllImages = require('./get-all-images')
const makeDeleteImages = require('./delete-images-bulk')
const makeCreateUploadPreset = require('./create-upload-preset')

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
const deleteImage = makeDeleteImage({cloudinary})
const deleteImages = makeDeleteImages({cloudinary})
const getAllImages = makeGetAllImages({cloudinary})
const createUploadPreset = makeCreateUploadPreset({cloudinary})

module.exports = {
    uploadImage,
    deleteImage,
    deleteImages,
    getAllImages,
    createUploadPreset
}