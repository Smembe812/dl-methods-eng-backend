const {service} = require('../../data-access/user')
const buildCreateUser = require('./create-user')
const createUser = buildCreateUser({service})

const makeGetAllUsers = require('./get-all-users') 
const getAllUsers = makeGetAllUsers({service})

const makeGetByIDUser = require('./get-by-id-user')
const getByIDUser = makeGetByIDUser({service, UError})

const makeUpdateUser = require('./update-a-user')
const updateUser = makeUpdateUser({service, getByIDUser, UError})

const makeDeleteUser = require('./delete-a-user')
const deleteUser = makeDeleteUser({service, getByIDUser, UError})

module.exports = {
    createUser,
    getAllUsers,
    getByIDUser,
    updateUser,
    deleteUser
}

function UError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}