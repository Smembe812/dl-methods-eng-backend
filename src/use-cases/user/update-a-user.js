const {makeUser} = require('../../entities/user')

/**
 * factory for updating a user
 * @param {object} params - Dependencies for update use-case
 * @param {object} params.service - Database handler
 * @param {function} params.getByIDUser - getByIDUser usecase
 * @param {Constructor} params.UError - User Error constructor
 * @return {Promise} - Promise of updated instance
 */
module.exports = ({service, getByIDUser, UError}) => {
    return async function updateUser(payload) {
        try {
            const {id, ...rest} = payload
            if(!id){
                throw new UError(
                    "could not find the user", 
                    {
                        status: 404
                    }
                )
            }
            // find user by its ID
            const {dataValues} = await getByIDUser(id)
            

            // patch user with update data
            const {createdAt, updatedAt, local, google, fullName, ...userToUpdate} = Object.assign(dataValues, rest)
            
            // validate patched user
            const {...validUser} = await makeUser(userToUpdate.methods, userToUpdate)

            // persist to db
            return await service.updateOne({id, ...validUser})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}