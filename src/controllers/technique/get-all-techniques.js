module.exports = ({getAllProcessElements}) => {
    return async (httpRequest, next) => {
        try {
            
            return await getAllProcessElements()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}