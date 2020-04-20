const cloudinary = require('cloudinary')

const makeUploadImage = require('./upload-image')
const makeDeleteImage = require('./delete-image')
const makeGetAllImages = require('./get-all-images')
const makeGetImagesByIDs = require('./get-images-by-ids')
const makeDeleteImages = require('./delete-images-bulk')
const makeCreateUploadPreset = require('./create-upload-preset')
const makeDeleteUploadPreset = require('./delete-upload-preset')
const makeCreateFolder = require('./create-folder')
const makeDeleteFolder = require('./delete-folder')
const makeGetImagesByTag = require('./get-images-by-tag')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
    console.warn('!! cloudinary config is undefined !!');
    console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
    cloudinary.v2.config(
        { 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET 
        }
    );
}

const uploadImage = makeUploadImage({cloudinary: cloudinary.v2})
const deleteImage = makeDeleteImage({cloudinary: cloudinary.v2})
const deleteImages = makeDeleteImages({cloudinary: cloudinary.v2})
const getAllImages = makeGetAllImages({cloudinary: cloudinary.v2})
const getImagesByTag = makeGetImagesByTag({cloudinary: cloudinary.v2})
const getImagesByIDs = makeGetImagesByIDs({cloudinary: cloudinary.v2})
const createUploadPreset = makeCreateUploadPreset({cloudinary: cloudinary.v2})
const deleteUploadPreset = makeDeleteUploadPreset({cloudinary: cloudinary.v2})
const createFolder = makeCreateFolder({cloudinary: cloudinary.v2})
const deleteFolder = makeDeleteFolder({cloudinary: cloudinary.v2})

module.exports = {
    uploadImage,
    deleteImage,
    deleteImages,
    getAllImages,
    getImagesByIDs,
    getImagesByTag,
    createUploadPreset,
    deleteUploadPreset,
    createFolder,
    deleteFolder,
    cloudinary
}