const makeKnowledgeResource = require('../../entities/knowledge-resources')

/**
 * factory for creating a knowledge resource
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDKnowledgeResources}) => {
    return async function updateKnowledgeResource(payload) {
        try {
            const {id, ...rest} = payload

            
            // find kr by its ID
            const {dataValues} = await getByIDKnowledgeResources(id)
            
            // patch kr with update data
            const {createdAt, updatedAt, ...knowledgeResourceToUpdate} = Object.assign(dataValues, rest)
            
            console.log(knowledgeResourceToUpdate)

            // validate patched kr
            const {title, content} = await makeKnowledgeResource(knowledgeResourceToUpdate)
            
            // persist to db
            return await service.updateOne({id, title, content})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}