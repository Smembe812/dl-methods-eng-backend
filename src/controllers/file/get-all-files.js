module.exports = ({getAllTechniques}) => {
    return async (httpRequest, next) => {
        try {
            
            return await getAllTechniques()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}