/**
 * factory for creating a file
 * @param {object} service - Database handler
 * @param {Function} getByIDFile - Get a file by id use case
 * @param {Constructor} FError - file error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, deleteImage, FError}) => {
    return async function deleteFile(public_id) {
        try {
            const cloudinaryDeleted = await deleteImage(public_id)

            if(cloudinaryDeleted){
                const {dataValues: {id}}= await service.getOneByPublicID(public_id) 

                return await service.deleteOne({id})
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}