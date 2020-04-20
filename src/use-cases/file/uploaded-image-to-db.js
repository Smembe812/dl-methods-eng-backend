const {makeFile} = require('../../entities/file')

/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {
    return async function (payload) {
        try {
            const data = await makeFile(payload)
    
            const {dataValues:{image, ...restDataValues}, ...rest} = await service.createOne(data)

            const file = {
                dataValues: {
                    image: JSON.parse(image),
                    ...restDataValues
                },
                ...rest
            }
            return Promise.resolve(file)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}