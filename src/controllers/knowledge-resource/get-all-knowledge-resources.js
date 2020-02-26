module.exports = ({getAllKnowledgeResources}) => {
    return async (httpRequest) => {
        try {
            return await getAllKnowledgeResources()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}