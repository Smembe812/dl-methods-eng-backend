const buildMakeUser = require("./user")
const Joi = require('@hapi/joi')

const localSchema = Joi.object({
    password: Joi.string(),
    email: Joi.string().email()
}).with("password", "email")

const validator = {localSchema}

const makeUser = buildMakeUser({validator})

module.exports = {makeUser}