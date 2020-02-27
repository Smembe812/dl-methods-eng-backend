const makeKnowledgeResource = require('../../entities/knowledge-resources')

/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDKnowledgeResources}) => {
    return async function updateKnowledgeResource(payload) {
        try {
            const {id, title, content} = payload

            // find kr by its ID
            const knowledgeResource = await getByIDKnowledgeResources(id)

            // patch kr with update data
            const updatedKnowledgeResource = Object.assign(knowledgeResource, {title, content})

            // validate patched kr
            const data = await makeKnowledgeResource(updatedKnowledgeResource)
            
            // persist to db
            return service.updateOne(data, id)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}