/**
 * make get user by id controller
 * @alias GetUserByIDController
 * @param {function} params.getByIDUser - Get user by if use-case
 * @namespace User
 */
module.exports = ({getByIDUser}) => {

    /**
     * get user by id controller
     * @param {object} httpRequest - http request object
     * @param {function} next - callback
     * @returns {(Promise<object>|Promise<Error>)}
     */
    return async (httpRequest, next) => {
        const {params: {id}} = httpRequest
        try {
            return await getByIDUser(id)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}