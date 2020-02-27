const {createOneKnowledgeResource} = require('../../use-cases/knowledge-resource/')
const makePostKnowledgeResource = require('./post-knowledge-resource')

const {updateKnowledgeResource} = require('../../use-cases/knowledge-resource/')
const makeUpdateKnowledgeResource = require('./update-a-knowledge-resource')

const {getAllKnowledgeResources} = require('../../use-cases/knowledge-resource/')
const makeGetAllKnowledgeResource = require('./get-all-knowledge-resources')

const {getByIDKnowledgeResources} = require('../../use-cases/knowledge-resource/')
const makeGetByIDKnowledgeResource = require('./get-by-id-knowledge-resource')

const {deleteOneKnowledgeResource} = require('../../use-cases/knowledge-resource')
const makeDeleteOneKnowledgeResource = require('./delete-a-knowledge-resource')

const postKnowledgeResource = makePostKnowledgeResource({createOneKnowledgeResource})
const updateOneKnowledgeResource = makeUpdateKnowledgeResource({updateKnowledgeResource})
const getAllKnowledgeResourcesController = makeGetAllKnowledgeResource({getAllKnowledgeResources})
const getByIDKnowledgeResourcesController = makeGetByIDKnowledgeResource({getByIDKnowledgeResources})
const deleteOneKnowledgeResourceContoller = makeDeleteOneKnowledgeResource({deleteOneKnowledgeResource})

module.exports = {
    postKnowledgeResource,
    updateOneKnowledgeResource,
    getAllKnowledgeResourcesController,
    getByIDKnowledgeResourcesController,
    deleteOneKnowledgeResourceContoller
}