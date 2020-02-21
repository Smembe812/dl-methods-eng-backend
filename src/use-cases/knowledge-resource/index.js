const {service} = require('../../data-access/knowledge-resource')
const makeCreateOneKnowledgeResource = require('./create-one-knowledge-resource')
const createOneKnowledgeResource = makeCreateOneKnowledgeResource({service})

module.exports = {
    createOneKnowledgeResource
}