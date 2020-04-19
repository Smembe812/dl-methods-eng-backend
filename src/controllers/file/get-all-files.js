module.exports = ({getAllFiles}) => {
    return async (httpRequest, next) => {
        try {
            
            return await getAllFiles()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}