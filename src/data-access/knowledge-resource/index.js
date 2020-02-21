const {define, ORM} = require('../db/')
const makeKnowledgeResourceSequelizeModel = require('./model.js')
const makeKnowledgeResourceService = require('./service')

const KnowledgeResource = makeKnowledgeResourceSequelizeModel({define, ORM})
const service = makeKnowledgeResourceService(KnowledgeResource)

module.exports = Object.freeze({
    KnowledgeResource,
    service
})
