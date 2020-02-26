module.exports = ({getAllKnowledgeResources}) => {
    return async () => {
        try {
            return await getAllKnowledgeResources()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}