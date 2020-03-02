module.exports = ({getByIDProcessElements}) => {
    return async (httpRequest, next) => {
        const {params: {id}} = httpRequest
        try {
            return await getByIDProcessElements(id)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}