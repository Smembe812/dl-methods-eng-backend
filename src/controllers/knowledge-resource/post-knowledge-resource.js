module.exports = ({createOneKnowledgeResource}) => {
    return async (httpRequest) => {
        try {
            const {body} = httpRequest
            const {dataValues: {title, content}} = await createOneKnowledgeResource(body)
    
            return Promise.resolve({
                status: 201,
                knowledgeResource: {title, content}
            })
        } catch (error) {
            return Promise.reject(error)
        }
    }
}