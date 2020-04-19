/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @param {Function} getByIDFile - Get a file by id use case
 * @param {Constructor} PEError - file error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDFile, FError}) => {
    return async function deleteFile(id) {
        try {
            // find file by its ID
            const deleted = await getByIDFile(id)

            if(!deleted){
                throw new FError('could not find the file', {status: 404})
            }

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}