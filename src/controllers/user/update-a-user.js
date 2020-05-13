/**
 * build make update user controller
 * @param {function} params.updateUser - update user use-case
 * @returns {function} update user controller
 */
module.exports = ({updateUser}) => {

    /**
     * update user controller
     * @param {Object} httpRequest - http request
     * @param {string} httpRequest.body.method - auth method
     * @param {function} next - express callback
     */
    return async (httpRequest, next) => {
        try {
            const {body, params: {id}} = httpRequest

            const updateData = Object.assign(body, {id})

            const updatedData = await updateUser(updateData)
    
            return Promise.resolve({updatedData, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}