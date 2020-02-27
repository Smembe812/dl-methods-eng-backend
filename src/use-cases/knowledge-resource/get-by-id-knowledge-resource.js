/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {

    /**
     * get all Knowledge resources
     */
    return async function getByIDKnowledgeResources(id) {
        try {
            return await service.getByID(id) ? 
                await service.getByID(id) : 
                (
                    Promise.reject(new Error("could not find the knowledge resource"))
                )
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}