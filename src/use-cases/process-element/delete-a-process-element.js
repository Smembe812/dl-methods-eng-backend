/**
 * factory for creating a process element
 * @param {object} service - Database handler
 * @param {Function} getByIDProcessElements - Get a process element by id use case
 * @param {Constructor} PEError - process element error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDProcessElements, PEError}) => {
    return async function deleteProcessElement(id) {
        try {
            // find kr by its ID
            const deleted = await getByIDProcessElements(id)

            if(!deleted){
                throw new PEError('could not find process element', {status: 404})
            }

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}