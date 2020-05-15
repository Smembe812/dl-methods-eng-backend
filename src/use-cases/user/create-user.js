const {makeUser} = require('../../entities/user')

/**
 * build factory for creating a user
 * @alias CreateUserUseCase
 * @param {object} depedencies
 * @param {function} depedencies.service - Database handler
 * @param {function} depedencies.bcrypt - encription library
 * @return {function} - createUser factory
 * @namespace User
 */
module.exports = ({service, bcrypt}) => {
    /**
     * factory for creating a user
     * @param {object} params
     * @param {string} params.method - auth method
     * @param {object} params.payload - user props payload
     * @returns {Promise}
     */
    return async function createUser({method, payload: {password, ...restOfPayload}}) {
        try {

            const hash = bcrypt.hashSync(password, 10);

            const user = await makeUser(method, {password: hash, ...restOfPayload})

            return await service.createOne(user)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}