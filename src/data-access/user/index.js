const {define, ORM, Op} = require('../db/')
const makeUserSequelizeModel = require('./model.js')
const makeUserService = require('./service')

console.warn(Op)

const User = makeUserSequelizeModel({define, ORM})
const service = makeUserService(User, Op)

module.exports = Object.freeze({
    User,
    service
})