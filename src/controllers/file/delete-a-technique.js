module.exports = ({deleteOneTechnique}) => {
    return async (httpRequest, next) => {
        try {
            const {params: {id}} = httpRequest

            const deleted = await deleteOneTechnique(id)
            if(deleted===1)
            return Promise.resolve({deleted: true, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}