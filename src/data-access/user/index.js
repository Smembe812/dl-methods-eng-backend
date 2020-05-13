const {define, ORM} = require('../db/')
const makeUserSequelizeModel = require('./model.js')
const makeUserService = require('./service')

const User = makeUserSequelizeModel({define, ORM})
const service = makeUserService(User)

module.exports = Object.freeze({
    User,
    service
})