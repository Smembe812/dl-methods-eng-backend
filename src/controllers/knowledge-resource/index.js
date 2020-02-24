const {createOneKnowledgeResource} = require('../../use-cases/knowledge-resource/')
const makePostKnowledgeResource = require('./post-knowledge-resource')


const postKnowledgeResource = makePostKnowledgeResource({createOneKnowledgeResource})

module.exports = {
    postKnowledgeResource
}