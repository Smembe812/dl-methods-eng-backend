const {service} = require('../../data-access/knowledge-resource')
const makeCreateOneKnowledgeResource = require('./create-one-knowledge-resource')
const createOneKnowledgeResource = makeCreateOneKnowledgeResource({service})

const makeGetAllKnowledgeResources = require('./get-all-knowledge-resources') 
const getAllKnowledgeResources = makeGetAllKnowledgeResources({service})

const makeGetByIDKnowledgeResources = require('./get-by-id-knowledge-resource')
const getByIDKnowledgeResources = makeGetByIDKnowledgeResources({service})


const makeUpdateKnowledgeResource = require('./update-knowledge-resource')
const updateKnowledgeResource = makeUpdateKnowledgeResource({service, getByIDKnowledgeResources})

module.exports = {
    createOneKnowledgeResource,
    getAllKnowledgeResources,
    getByIDKnowledgeResources,
    updateKnowledgeResource
}