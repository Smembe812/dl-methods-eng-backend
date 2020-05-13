/**
 * factory for creating a user
 * @param {object} service - Database handler
 * @param {Function} getByIDUser - Get a user by id use case
 * @param {Constructor} UError - user error constructor
 * @return {function} - Promise of created instance
 */
module.exports = ({service, getByIDUser, UError}) => {

    /**
     * @param {string} id - user id
     * @returns {(Promise<number>|Promise<Error>)}
     */
    return async function deleteUser(id) {
        try {
            // find user by its ID
            const deleted = await getByIDUser(id)

            if(!deleted){
                throw new UError('could not find user', {status: 404})
            }

            return await service.deleteOne({id})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}