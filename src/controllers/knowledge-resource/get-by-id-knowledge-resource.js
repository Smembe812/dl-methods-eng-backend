module.exports = ({getByIDKnowledgeResources}) => {
    return async (httpRequest, next) => {
        const {params: {id}} = httpRequest
        try {
            return await getByIDKnowledgeResources(id)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}