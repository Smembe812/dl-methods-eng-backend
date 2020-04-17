const {service} = require('../../data-access/file')
const {uploadImage} = require('../../cloudinary')

const makeUploadAnImage = require('./upload-an-image')
const uploadAnImage = makeUploadAnImage({service, uploadImage, FError})

const makeGetAllFiles = require('./get-all-files') 
const getAllFiles = makeGetAllFiles({service})

const makeGetByIDFile = require('./get-by-id-file')
const getByIDFile = makeGetByIDFile({service, FError})


// const makeUpdateProcessElement = require('./update-a-process-element')
// const updateProcessElement = makeUpdateProcessElement({service, getByIDProcessElements})

// const makeDeleteProcessElement = require('./delete-a-process-element')
// const deleteOneProcessElement = makeDeleteProcessElement({service, getByIDProcessElements, PEError})

module.exports = {
    uploadAnImage,
    getAllFiles,
    getByIDFile,
    // updateProcessElement,
    // deleteOneProcessElement
}

function FError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}