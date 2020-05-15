/**
 * Build make controller
 * @alias UserController
 * @param {function} params.createUser - create user use-case
 * @returns {function}
 * @namespace User
 */
module.exports = ({createUser}) => {

    /**
     * @param {object} httpRequest - http req request
     * @param {function} next - callback
     * @return {(Promise<object>|Promise<Error>)}
     */
    return async (httpRequest, next) => {
        try {
            const {body: {method, ...payload}} = httpRequest
            const user = await createUser({method, payload})
    
            return Promise.resolve({...user, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}