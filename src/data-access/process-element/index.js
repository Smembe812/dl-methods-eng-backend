const {define, ORM} = require('../db/')
const makeProcessElementSequelizeModel = require('./model.js')
const makeProcessElementService = require('./service')

const ProcessElement = makeProcessElementSequelizeModel({define, ORM})
const service = makeProcessElementService(ProcessElement)

module.exports = Object.freeze({
    ProcessElement,
    service
})
