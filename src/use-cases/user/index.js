const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const SECRET = process.env.JWT_SECRET


const {service} = require('../../data-access/user')
const buildCreateUser = require('./create-user')
const createUser = buildCreateUser({service, bcrypt})

const makeGetAllUsers = require('./get-all-users') 
const getAllUsers = makeGetAllUsers({service})

const makeGetByIDUser = require('./get-by-id-user')
const getByIDUser = makeGetByIDUser({service, UError})

const makeUpdateUser = require('./update-a-user')
const updateUser = makeUpdateUser({service, getByIDUser, UError})

const makeDeleteUser = require('./delete-a-user')
const deleteUser = makeDeleteUser({service, getByIDUser, UError})

const makeAuthenticateUser = require('./athenticate-user')
const authenticateUser = makeAuthenticateUser({service, jwt, bcrypt, SECRET})

module.exports = {
    createUser,
    getAllUsers,
    getByIDUser,
    updateUser,
    deleteUser,
    authenticateUser
}

function UError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}