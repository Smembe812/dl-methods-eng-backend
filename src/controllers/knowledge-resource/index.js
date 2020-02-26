const {createOneKnowledgeResource} = require('../../use-cases/knowledge-resource/')
const makePostKnowledgeResource = require('./post-knowledge-resource')

const {getAllKnowledgeResources} = require('../../use-cases/knowledge-resource/')
const makeGetAllKnowledgeResource = require('./get-all-knowledge-resources')

const {getByIDKnowledgeResources} = require('../../use-cases/knowledge-resource/')
const makeGetByIDKnowledgeResource = require('./get-by-id-knowledge-resource')


const postKnowledgeResource = makePostKnowledgeResource({createOneKnowledgeResource})
const getAllKnowledgeResourcesController = makeGetAllKnowledgeResource({getAllKnowledgeResources})
const getByIDKnowledgeResourcesController = makeGetByIDKnowledgeResource({getByIDKnowledgeResources})

module.exports = {
    postKnowledgeResource,
    getAllKnowledgeResourcesController,
    getByIDKnowledgeResourcesController
}