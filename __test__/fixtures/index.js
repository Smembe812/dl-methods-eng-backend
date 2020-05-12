const makeFakeProcessElement = require('./process-element')
const makeFakeKnowledgeResource = require('./knowledge-resource')
const makeFakeTechnique = require('./technique')
const makeFakeFile = require('./file')
const makeFakeImage = require('./image')
const {makeFakeUser, userLocalMock} = require('./user')

module.exports = {
    makeFakeProcessElement,
    makeFakeKnowledgeResource,
    makeFakeTechnique,
    makeFakeFile,
    makeFakeImage,
    makeFakeUser,
    userLocalMock
}