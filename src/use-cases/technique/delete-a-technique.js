/**
 * factory for creating a technique
 * @param {object} service - Database handler
 * @param {Function} getByIDTechnique - Get a technique by id use case
 * @param {Constructor} TEError - technique error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDTechnique, TEError}) => {
    return async function deleteTechnique(id) {
        try {
            // find technique by its ID
            const deleted = await getByIDTechnique(id)

            if(!deleted){
                throw new TEError('could not find technique', {status: 404})
            }

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}