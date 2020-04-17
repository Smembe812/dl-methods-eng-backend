/**
 * factory for geting a files by id
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, FError}) => {

    /**
     * get all files
     */
    return async function getByIDFile(id) {
        try {
            const file =  await service.getByID(id) 

            if (!file){
                throw new FError('could not find the file', {status: 404})
            }
            
            return Promise.resolve(file)

        } catch (error) {
            return Promise.reject(error)
        } 
    }
}