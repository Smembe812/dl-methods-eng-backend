const {service} = require('../../data-access/knowledge-resource')
const makeCreateOneKnowledgeResource = require('./create-one-knowledge-resource')
const createOneKnowledgeResource = makeCreateOneKnowledgeResource({service})

const makeGetAllKnowledgeResources = require('./get-all-knowledge-resources') 
const getAllKnowledgeResources = makeGetAllKnowledgeResources({service})

module.exports = {
    createOneKnowledgeResource,
    getAllKnowledgeResources
}