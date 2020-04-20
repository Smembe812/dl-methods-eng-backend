module.exports = (File, {QueryTypes, instance}) => {
        async function createOne(input){
            try {
                const data = await File.create(input)
                
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
    
        async function getAll(){
            try {
                return await File.findAll()
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function getByID(id){
            try {
                return await File.findOne({ where: {id}})
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function getAllByIDs([...ids]){
            try {
                
                return await File.findAll({ where: {id: [...ids]}})
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function getAllByPublicIDs(publicIDs){
            try {
                return await File.findAll({ where: {public_id: publicIDs}})
            } catch (error) {
                return Promise.reject(error)
            }
        }

        async function getOneByPublicID(public_id){
            try {
                return await File.findOne({ where: {public_id}})
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function updateOne(payload){
            try {
                const {id, ...updateValues } = payload
    
                const [updateState] = await File.update(updateValues, { where: {id}})
    
                const {dataValues} = updateState === 1 ? await getByID(id) : new Error("Failed to update")
                
                return Promise.resolve(dataValues)
    
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function deleteOne(payload){
            try {
                const {id} = payload
    
                const deleted = await File.destroy({ where: {id}})
                return Promise.resolve(deleted)
    
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        async function deleteBulk(payload){
            try {
                const [...ids] = payload
    
                const deleted = await File.destroy({ where: {id: [...ids]}})
                return Promise.resolve(deleted)
    
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        return Object.freeze({
            createOne,
            getAll,
            getByID,
            getAllByIDs,
            getAllByPublicIDs,
            getOneByPublicID,
            updateOne,
            deleteOne,
            deleteBulk
        })
}