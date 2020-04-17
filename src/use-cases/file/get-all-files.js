/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {

    /**
     * get all files
     */
    return async function getAllFiles() {
        try {
            return await service.getAll()
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}