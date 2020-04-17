const {service} = require('../../data-access/file')
const {uploadImage} = require('../../cloudinary')

const makeUploadAnImage = require('./upload-an-image')
const uploadAnImage = makeUploadAnImage({service, uploadImage, FError})

// const makeGetAllProcessElements = require('./get-all-process-elements') 
// const getAllProcessElements = makeGetAllProcessElements({service})

// const makeGetByIDProcessElements = require('./get-by-id-process-element')
// const getByIDProcessElements = makeGetByIDProcessElements({service, PEError})


// const makeUpdateProcessElement = require('./update-a-process-element')
// const updateProcessElement = makeUpdateProcessElement({service, getByIDProcessElements})

// const makeDeleteProcessElement = require('./delete-a-process-element')
// const deleteOneProcessElement = makeDeleteProcessElement({service, getByIDProcessElements, PEError})

module.exports = {
    uploadAnImage,
    // getAllProcessElements,
    // getByIDProcessElements,
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