//TODO: must check if [lastName, middleName, userName, etc] are strings
/**
 * Make User Entity Factory
 * @author Paul Sembereka
 * @alias UserEntity
 * @returns {function}
 * @namespace UserEntityFactory
 */
module.exports = () => {

    /**
     * @param {Object} props - User Properties
     * @param {String} props.firstName - The first name of the user
     * @param {String} props.lastName - The last name of the user
     * @param {String} props.userName - The username of the user
     * @param {String} props.email - The email of the user
     * @param {String} props.password - The password of the user
     * @param {Array} props.method - The auth method of the user
     * @returns {Promise}
     * @namespace UserEntity
     */
    return ({
            firstName, 
            lastName, 
            middleName, 
            userName, 
            email, 
            avatar, 
            password,
            method
        }) => {

        if (!firstName){
            return Promise.reject(new Error("a user must have a first name"))
        }

        if (!lastName){
            return Promise.reject(new Error("a user must have a last name"))
        }

        if (!email){
            return Promise.reject(new Error("a user must have a email"))
        }

        if(!password){
            return Promise.reject(new Error("a user must have a password"))
        }

        if(!userName){
            return Promise.reject(new Error("a user must have a username"))
        }

        if(!method){
            return Promise.reject(new Error("a user must have an auth method"))
        }

        const local = {email, password}

        const google = {id, email}

        return Promise.resolve(

            /**
             * @typedef {Object} User
             * @property {String} firstName
             * @property {String} lastName
             * @property {String} middleName
             * @property {String} userName
             * @property {String} avatar
             * @property {Object} local
             * @property {String} local.email
             * @property {String} local.password
             * @property {Object} google
             * @property {String} google.id
             * @property {String} google.email
             */
            Object.freeze({
                firstName, 
                lastName, 
                middleName, 
                userName, 
                avatar, 
                local,
                google
            })
        )
    }
}