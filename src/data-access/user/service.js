/**
 * Make User Service Factory
 * @author Paul Sembereka
 * @alias UserService
 * @param {function} User - Sequalize user model
 * @returns {function}
 * @namespace User
 */
module.exports = (User) => {
    /**
     * @param {object} input - user payload obj made from User Entity factory
     * @returns {(Promise<object>|Promise<Error>)} Promise object response from db
     */
    async function createOne(input){
        try {
            const data = await User.create(input)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    /**
     * 
     */
    async function getAll(options=null){
        try {
            return await User.findAll(options && options.protected ? {
                attributes: [
                    "id",
                    "firstName",
                    "lastName",
                    "fullName",
                    "middleName",
                    "userName",
                    "avatar",
                    "createdAt",
                    "updatedAt"
                ]
              } : {})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function getByID(id, options=null){
        try {
            if(options && options.protected){
                return await User.findOne({ where: {id},
                    attributes: [
                        "id",
                        "firstName",
                        "lastName",
                        "fullName",
                        "middleName",
                        "userName",
                        "avatar",
                        "createdAt",
                        "updatedAt"
                    ]
                  })
            }
            return await User.findOne({ where: {id}})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function updateOne(payload){
        try {
            const {id, ...updateValues } = payload

            const [updateState] = await User.update(updateValues, { where: {id}})

            const {dataValues} = updateState === 1 ? await getByID(id) : new Error("Failed to update")
            
            return Promise.resolve(dataValues)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function deleteOne(payload){
        try {
            const {id} = payload

            const deleted = await User.destroy({ where: {id}})
            return Promise.resolve(deleted)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    return Object.freeze({
        createOne,
        getAll,
        getByID,
        updateOne,
        deleteOne
    })
}