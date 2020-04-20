module.exports = ({uploadedImageToBD}) => {
    return async (httpRequest, next) => {
        try {
            const {body, file, query} = httpRequest
            

            const strippedBody = {
                ...body,
                image: file
            }

            const {dataValues} = await uploadedImageToBD(strippedBody)
    
            if(query && query.editor){
            	const {image: {secure_url}} = dataValues
            	
            	return Promise.resolve({file: {url: secure_url}, "success" : 1,})
            }
            
            return Promise.resolve({dataValues, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
