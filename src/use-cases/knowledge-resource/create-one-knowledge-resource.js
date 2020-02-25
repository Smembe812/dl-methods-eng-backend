const makeKnowledgeResource = require('../../entities/knowledge-resources')

/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {
    return async function createOneKnowledgeResource(payload) {
        try {
            const data = await makeKnowledgeResource(payload)
    
            return service.createOne(data)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}