const {define, ORM} = require('../db/')
const makeFileSequelizeModel = require('./model.js')
const makeFileService = require('./service')

const File = makeFileSequelizeModel({define, ORM})
const service = makeFileService(File)

module.exports = Object.freeze({
    File,
    service
})
