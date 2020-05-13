const {makeUser} = require('../../entities/user')

/**
 * build factory for creating a user
 * @alias CreateUserUseCase
 * @param {object} depedencies
 * @param {object} depedencies.service - Database handler
 * @return {function} - createUser factory
 * @namespace User
 */
module.exports = ({service}) => {
    /**
     * factory for creating a user
     * @param {object} params
     * @param {string} params.method - auth method
     * @param {object} params.payload - user props payload
     * @returns {Promise}
     */
    return async function createUser({method, payload}) {
        try {
            const user = await makeUser(method, payload)
    
            return service.createOne(user)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}