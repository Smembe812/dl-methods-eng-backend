module.exports = ({cloudinary}) => {
    return function getImagesByIDs([...ids]){
        return cloudinary.api.resources_by_ids([...ids], (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}