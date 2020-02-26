module.exports = ({getAllKnowledgeResources}) => {
    return async (httpRequest, next) => {
        try {
            
            return await getAllKnowledgeResources()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}