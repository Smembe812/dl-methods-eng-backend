const {define, ORM} = require('../db/')
const makeTechniqueSequelizeModel = require('./model.js')
const makeTechniqueService = require('./service')

const Technique = makeTechniqueSequelizeModel({define, ORM})
const service = makeTechniqueService(Technique)

module.exports = Object.freeze({
    Technique,
    service
})