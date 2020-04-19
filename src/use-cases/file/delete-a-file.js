/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @param {Function} getByIDFile - Get a file by id use case
 * @param {Constructor} FError - file error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, getByIDFile, deleteImage, FError}) => {
    return async function deleteFile(id) {
        try {
            const cloudinaryDeleted = await deleteImage(id)

            if(cloudinaryDeleted){
                return await service.deleteOne({id})
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}