const makeProcessElement = require('../../entities/process-element')

/**
 * factory for creating a process element
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service}) => {
    return async function createOneProcessElement(payload) {
        try {
            const data = await makeProcessElement(payload)
    
            return service.createOne(data)
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}