/**
 * make delete user controller
 * @alias MakeUserController
 * @param {function} params.deleteUser - delete user use-case
 * @returns {function}
 * @namespace User
 */
module.exports = ({deleteUser}) => {
    /**
     * delete user controller
     * @param {object} httpRequest - express http request
     * @param {function} next - express callback
     * @returns {(Promise<number>|Promise<Error>)}
     */
    return async (httpRequest, next) => {
        try {
            const {params: {id}} = httpRequest

            const deleted = await deleteUser(id)
            if(deleted===1)
            return Promise.resolve({deleted: true, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}