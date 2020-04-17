/**
 * factory for creating a process element
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {

    /**
     * get all process elements
     */
    return async function getAllProcessElement() {
        try {
            return await service.getAll()
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}