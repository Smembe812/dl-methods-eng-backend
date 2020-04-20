module.exports = ({uploadedImageToBD}) => {
    return async (httpRequest, next) => {
        try {
            const {body, file} = httpRequest

            console.warn(httpRequest)

            const strippedBody = {
                ...body,
                image: file
            }

            const {dataValues} = await uploadedImageToBD(strippedBody)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}