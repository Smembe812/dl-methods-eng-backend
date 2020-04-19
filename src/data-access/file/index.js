const {define, ORM, instance, QueryTypes} = require('../db/')
const makeFileSequelizeModel = require('./model.js')
const makeFileService = require('./service')

const File = makeFileSequelizeModel({define, ORM})
const service = makeFileService(File, {QueryTypes, instance})

module.exports = Object.freeze({
    File,
    service
})
