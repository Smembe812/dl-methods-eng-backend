const {createOneKnowledgeResource} = require('../../use-cases/knowledge-resource/')
const makePostKnowledgeResource = require('./post-knowledge-resource')

const {getAllKnowledgeResources} = require('../../use-cases/knowledge-resource/')
const makeGetAllKnowledgeResource = require('./get-all-knowledge-resources')


const postKnowledgeResource = makePostKnowledgeResource({createOneKnowledgeResource})
const getAllKnowledgeResourcesController = makeGetAllKnowledgeResource({getAllKnowledgeResources})

module.exports = {
    postKnowledgeResource,
    getAllKnowledgeResourcesController
}