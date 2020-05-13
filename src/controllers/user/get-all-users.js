/**
 * make get all users controller
 * @param {function} params.getAllUsers - get all users use-case
 * @returns {(Promise<object>|Promise<Error>)}
 */
module.exports = ({getAllUsers}) => {

    /**
     * get all users controller
     */
    return async (httpRequest, next) => {
        try {
            
            return await getAllUsers()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}