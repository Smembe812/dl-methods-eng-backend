const {
    createUser, 
    getByIDUser, 
    getAllUsers, 
    updateUser, 
    deleteUser} = require('../../use-cases/user/')

const makePostUser = require('./post-user')
const makeUpdateTechnique = require('./update-a-user')
const makeGetAllUsers = require('./get-all-users')
const makeGetByIDUser = require('./get-by-id-user')
const makeDeleteUser = require('./delete-a-user')

const postUserController = makePostUser({createUser})
const updateOneUserController = makeUpdateTechnique({updateUser})
const getAllUsersController = makeGetAllUsers({getAllUsers})
const getByIDUserController = makeGetByIDUser({getByIDUser})
const deleteUserContoller = makeDeleteUser({deleteUser})

module.exports = {
    postUserController,
    updateOneUserController,
    getAllUsersController,
    getByIDUserController,
    deleteUserContoller
}