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
    
            return await service.createOne(data)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}