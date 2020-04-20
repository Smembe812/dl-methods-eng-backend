const {makeFile} = require('../../entities/file')

/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, uploadImage, FError}) => {
    return async function (payload) {
        try {
            let cloudinaryImage;

            const [{directory, options}, {title}] = payload
            //if option, apply options
            if(directory && options){
                cloudinaryImage = await uploadImage(directory, options)
            }else{
                cloudinaryImage = await uploadImage(directory)
            }

            const data = await makeFile({title, image: cloudinaryImage})
    
            const {dataValues: {image, ...restDataValues}, ...rest} = await service.createOne(data)

            const file = {
                dataValues: {
                    image: JSON.parse(image),
                    ...restDataValues
                },
                ...rest
            }
            return Promise.resolve(file)
            
        } catch (error) {
            if (error.error.code === "ENOENT"){
                throw new FError('could not find the file', {status: 404})
            }

            return Promise.reject(error)
        }
    }
}