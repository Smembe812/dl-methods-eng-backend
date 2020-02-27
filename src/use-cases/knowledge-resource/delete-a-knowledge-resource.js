/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @param {Function} getByIDKnowledgeResources - Get a knowledge resource by id use case
 * @param {Constructor} KRError - Knowledge Resource error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDKnowledgeResources, KRError}) => {
    return async function deleteKnowledgeResource(id) {
        try {
            // find kr by its ID
            const deleted = await getByIDKnowledgeResources(id)

            if(!deleted){
                throw new KRError('could not find knowledge resource', {status: 404})
            }

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}