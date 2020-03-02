/**
 * factory for creating a technique
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {

    /**
     * get all techniques
     */
    return async function getAllTechniques() {
        try {
            return await service.getAll()
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}