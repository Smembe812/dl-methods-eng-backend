const {service} = require('../../data-access/process-element')
const makeCreateOneProcessElement = require('./create-one-process-element')
const createOneProcessElement = makeCreateOneProcessElement({service})

const makeGetAllProcessElements = require('./get-all-process-elements') 
const getAllProcessElements = makeGetAllProcessElements({service})

const makeGetByIDProcessElements = require('./get-by-id-process-element')
const getByIDProcessElements = makeGetByIDProcessElements({service, PEError})


const makeUpdateProcessElement = require('./update-a-process-element')
const updateProcessElement = makeUpdateProcessElement({service, getByIDProcessElements})

const makeDeleteProcessElement = require('./delete-a-process-element')
const deleteOneProcessElement = makeDeleteProcessElement({service, getByIDProcessElements, PEError})

module.exports = {
    createOneProcessElement,
    getAllProcessElements,
    getByIDProcessElements,
    updateProcessElement,
    deleteOneProcessElement
}

function PEError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}