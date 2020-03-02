module.exports = ({getByIDTechnique}) => {
    return async (httpRequest, next) => {
        const {params: {id}} = httpRequest
        try {
            return await getByIDTechnique(id)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}