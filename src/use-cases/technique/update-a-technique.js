const makeProcessElement = require('../../entities/process-element')

/**
 * factory for updating a process element
 * @param {object} service - Database handler
 * @return {Promise} - Promise of updated instance
 */
module.exports = ({service, getByIDProcessElements}) => {
    return async function updateProcessElement(payload) {
        try {
            const {id, ...rest} = payload

            
            // find pe by its ID
            const {dataValues} = await getByIDProcessElements(id)
            
            // patch pe with update data
            const {createdAt, updatedAt, ...ProcessElementToUpdate} = Object.assign(dataValues, rest)
            
            // validate patched pe
            const {title, description, aim, outcome} = await makeProcessElement(ProcessElementToUpdate)
            
            // persist to db
            return await service.updateOne({id, title, description, aim, outcome})
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}