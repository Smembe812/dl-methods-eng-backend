/**
 * build make authenticateUser
 * @alias buildMakeAuthenticateUser
 * @param {object} params - dependencies
 * @param {function} params.jwt - JWT instance
 * @param {function} params.service - database service
 * @returns {function} makeAuthenticateUser factory
 */
module.exports = ({jwt, service, bcrypt, SECRET}) => {

    return async function makeAuthenticateUser({password, email}){
        const {id, userName, fullName, local, google} = await service.findOne({local: {email}})

        if (local && bcrypt.compareSync(password, local.password)){
            const token = jwt.sign({sub: id}, SECRET)

            return Promise.resolve({id, token, userName, fullName})
        }
        
        return Promise.reject({message: "wrong email or password"})
    }
}