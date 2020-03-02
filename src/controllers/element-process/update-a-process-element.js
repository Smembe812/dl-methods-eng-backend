module.exports = ({updateKnowledgeResource}) => {
    return async (httpRequest, next) => {
        try {
            const {body, params: {id}} = httpRequest

            const updateData = Object.assign(body, {id})

            const updatedData = await updateKnowledgeResource(updateData)
    
            return Promise.resolve({updatedData, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}