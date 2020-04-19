/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @param {Function} getByIDFile - Get a file by id use case
 * @param {Constructor} PEError - file error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, deleteImages, PEError}) => {
    return async function deleteBulkFiles(ids) {
        try {
            // find file by its ID
            const deleted = await deleteImages(ids)

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}