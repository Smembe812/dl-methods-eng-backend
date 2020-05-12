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
     * @param {String} method - User's auth method'
     * @param {Object} props - User Properties
     * @param {String} props.firstName - The first name of the user
     * @param {String} props.lastName - The last name of the user
     * @param {String} props.userName - The username of the user
     * @param {String} props.email - The email of the user
     * @param {String} props.password - The password of the user
     * @returns {(Promise<Object>|Error)} Promise object of created user or Error
     * @namespace UserEntity
     */
    return (method, 
            {
                firstName, 
                lastName, 
                middleName, 
                userName, 
                fullName,
                email, 
                avatar, 
                password,
                profileID
            }
        ) => {

        if(!method){
            return Promise.reject(new Error("a user must have an auth method"))
        }

        if (method === "local"){
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


            const local = {email, password}
    
            const name = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`
    
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
                 */
                Object.freeze({
                    firstName, 
                    lastName,
                    fullName: name,
                    middleName, 
                    userName, 
                    avatar, 
                    local
                })
            )
        }

        else if (method === "google"){
            if (!firstName){
                return Promise.reject(new Error("a user must have a first name"))
            }
    
            if (!lastName){
                return Promise.reject(new Error("a user must have a last name"))
            }
    
            if (!email){
                return Promise.reject(new Error("a user must have a email"))
            }
    
            if(!userName){
                return Promise.reject(new Error("a user must have a username"))
            }
    
            const google = {profileID, email}
    
            return Promise.resolve(
    
                /**
                 * @typedef {Object} User
                 * @property {String} firstName
                 * @property {String} lastName
                 * @property {String} middleName
                 * @property {String} userName
                 * @property {String} avatar
                 * @property {Object} google
                 * @property {String} google.id
                 * @property {String} google.email
                 */
                Object.freeze({
                    firstName, 
                    lastName,
                    fullName,
                    middleName, 
                    userName, 
                    avatar, 
                    google
                })
            )
        }
        else{
            return Promise.reject(new Error("unknown auth method"))
        }

    }
}