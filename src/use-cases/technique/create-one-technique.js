const makeTechnique = require('../../entities/technique')

/**
 * factory for creating a technique
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {
    return async function createOneTechnique(payload) {
        try {
            const data = await makeTechnique(payload)
    
            return service.createOne(data)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}