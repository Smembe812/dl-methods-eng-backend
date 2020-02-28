/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, KRError}) => {

    /**
     * get all Knowledge resources
     */
    return async function getByIDKnowledgeResources(id) {
        try {
            const kr =  await service.getByID(id) 

            if (!kr){
                throw new KRError("could not find the knowledge resource", {status: 404})
            }
            
            return Promise.resolve(kr)
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}