module.exports = ({uploadAnImage}) => {
    return async (httpRequest, next) => {
        try {
            const {body, file} = httpRequest
            
            console.warn(httpRequest, file)

            const strippedBody = [
                {
                    directory: file.path
                },
                {title: body.title || null}
            ]

            const {dataValues} = await uploadAnImage(strippedBody)
    
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}