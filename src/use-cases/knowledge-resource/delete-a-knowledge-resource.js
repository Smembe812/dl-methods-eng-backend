const makeKnowledgeResource = require('../../entities/knowledge-resources')

/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
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