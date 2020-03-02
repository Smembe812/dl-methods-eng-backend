const makeTechnique = require('../../entities/technique')

/**
 * factory for updating a technique
 * @param {object} service - Database handler
 * @return {Promise} - Promise of updated instance
 */
module.exports = ({service, getByIDTechnique, TError}) => {
    return async function updateTechnique(payload) {
        try {
            const {id, ...rest} = payload
            if(!id){
                throw new TError(
                    "could not find the technique", 
                    {
                        status: 404
                    }
                )
            }
            // find technique by its ID
            const {dataValues} = await getByIDTechnique(id)
            

            // patch technique with update data
            const {createdAt, updatedAt, ...techniqueToUpdate} = Object.assign(dataValues, rest)
            
            // validate patched technique
            const {...validProps} = await makeTechnique(techniqueToUpdate)

            // persist to db
            return await service.updateOne({id, ...validProps})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}