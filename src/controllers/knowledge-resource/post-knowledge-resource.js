module.exports = ({createOneKnowledgeResource}) => {
    return async (httpRequest, next) => {
        try {
            const {body} = httpRequest
            const {dataValues} = await createOneKnowledgeResource(body)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}