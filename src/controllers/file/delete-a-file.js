module.exports = ({deleteOneFile}) => {
    return async (httpRequest, next) => {
        try {
            const {params: {public_id}} = httpRequest

            const deleted = await deleteOneFile(public_id)
            if(deleted===1)
            return Promise.resolve({deleted: true, status: 201})
        } catch (error) {
            return Promise.reject(error)
        }
    }
}