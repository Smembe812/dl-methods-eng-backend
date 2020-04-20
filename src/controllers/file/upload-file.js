module.exports = ({uploadAnImage}) => {
    return async (httpRequest, next) => {
        try {
            const {body, file} = httpRequest
            
            console.warn(httpRequest, file)
            const {dataValues} = await uploadAnImage(body)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}