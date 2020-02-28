module.exports = (ProcessElement) => {
    async function createOne(input){
        try {
            const data = await ProcessElement.create(input)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }


    async function getAll(){
        try {
            return await ProcessElement.findAll()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function getByID(id){
        try {
            return await ProcessElement.findOne({ where: {id}})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function updateOne(payload){
        try {
            const {id, ...updateValues } = payload

            const [updateState] = await ProcessElement.update(updateValues, { where: {id}})

            const {dataValues} = updateState === 1 ? await getByID(id) : new Error("Failed to update")
            
            return Promise.resolve(dataValues)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function deleteOne(payload){
        try {
            const {id} = payload

            const deleted = await ProcessElement.destroy({ where: {id}})
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