const {service} = require('../../data-access/technique')
const makeCreateOneTechnique = require('./create-one-technique')
const createOneTechnique = makeCreateOneTechnique({service})

const makeGetAllTechniques = require('./get-all-techniques') 
const getAllTechniques = makeGetAllTechniques({service})

const makeGetByIDTechnique = require('./get-by-id-technique')
const getByIDTechnique = makeGetByIDTechnique({service, TError})


const makeUpdateTechnique = require('./update-a-technique')
const updateTechnique = makeUpdateTechnique({service, getByIDTechnique, TError})

const makeDeleteTechnique = require('./delete-a-technique')
const deleteOneTechnique = makeDeleteTechnique({service, getByIDTechnique, TError})

module.exports = {
    createOneTechnique,
    getAllTechniques,
    getByIDTechnique,
    updateTechnique,
    deleteOneTechnique
}

function TError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}