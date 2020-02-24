module.exports = ({createOneKnowledgeResource}) => {
    return async (kr) => {
        try {
            const {dataValues: {title, content}} = await createOneKnowledgeResource(kr)
    
            return Promise.resolve({
                status: 201,
                knowledgeResource: {title, content}
            })
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }
}