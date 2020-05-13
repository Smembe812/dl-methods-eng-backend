/**
 * factory for creating a user
 * @param {object} params.service - Database handler
 * @return {function} - get all users factory
 */
module.exports = ({service}) => {

    /**
     * get all users
     * @returns {Promise}
     */
    return async function getAllUsers() {
        try {
            return await service.getAll()
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}