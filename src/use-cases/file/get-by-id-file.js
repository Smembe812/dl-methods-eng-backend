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

            const {dataValues:{image, ...restDataValues}} = file
            
            const fileToSend = {
                dataValues: {
                    image: JSON.parse(image),
                    ...restDataValues
                }
            }
            
            return Promise.resolve(fileToSend)

        } catch (error) {
            return Promise.reject(error)
        } 
    }
}