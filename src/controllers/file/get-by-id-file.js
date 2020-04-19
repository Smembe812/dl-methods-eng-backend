module.exports = ({getByIDFile}) => {
    return async (httpRequest, next) => {
        const {params: {id}} = httpRequest
        try {
            return await getByIDFile(id)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}