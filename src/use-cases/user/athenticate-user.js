/**
 * build make authenticateUser
 * @alias buildMakeAuthenticateUser
 * @param {object} params - dependencies
 * @param {function} params.jwt - JWT instance
 * @param {function} params.service - database service
 * @returns {function} makeAuthenticateUser factory
 */
module.exports = ({jwt, service, bcrypt}) => {

    return async function makeAuthenticateUser({password, email}){
        return await service.findOne({email})
    }
}