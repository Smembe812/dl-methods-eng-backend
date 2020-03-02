module.exports = ({createOneProcessElement}) => {
    return async (httpRequest, next) => {
        try {
            const {body} = httpRequest
            const {dataValues} = await createOneProcessElement(body)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}