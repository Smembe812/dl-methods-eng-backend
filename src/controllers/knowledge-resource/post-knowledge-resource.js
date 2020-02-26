module.exports = ({createOneKnowledgeResource}) => {
    return async (httpRequest) => {
        try {
            const {body} = httpRequest
            const {dataValues} = await createOneKnowledgeResource(body)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}