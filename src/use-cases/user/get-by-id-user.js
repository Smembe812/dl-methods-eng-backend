/**
 * factory for geting a user by id
 * @param {object} params.service - Database handler
 * @param {function} params.UError - User Error constructor
 * @return {Promise} - Promise of created instance
 */
module.exports = ({service, UError}) => {

    /**
     * get all users
     * @param {string} id - user id
     * @returns {(Promise<object>|Promise<Error>)} user object or Error
     */
    return async function getByIDusers(id) {
        try {
            const user =  await service.getByID(id, {protected: true}) 

            if (!user){
                throw new UError(
                    "could not find the user", 
                    {status: 404}
                )
            }
            
            return Promise.resolve(user)
            
        } catch (error) {
            return Promise.reject(error)
        } 
    }
}