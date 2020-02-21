const makeKnowledgeResource = require('../../entities/knowledge-resources')

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