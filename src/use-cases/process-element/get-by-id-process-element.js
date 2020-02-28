/**
 * factory for geting a process element by id
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, PEError}) => {

    /**
     * get all process elements
     */
    return async function getByIDKnowledgeResources(id) {
        try {
            const kr =  await service.getByID(id) 

            if (!kr){
                throw new PEError("could not find the process element", {status: 404})
            }
            
            return Promise.resolve(kr)
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}