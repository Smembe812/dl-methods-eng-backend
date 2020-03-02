/**
 * factory for geting a technique by id
 * @param {object} service - Database handler
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, TError}) => {

    /**
     * get all techniques
     */
    return async function getByIDTechniques(id) {
        try {
            const kr =  await service.getByID(id) 

            if (!kr){
                throw new TError(
                    "could not find the technique", 
                    {status: 404}
                )
            }
            
            return Promise.resolve(kr)
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}