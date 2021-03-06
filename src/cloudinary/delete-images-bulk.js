module.exports = ({cloudinary}) => {
    return function deleteImages(publicIDs){
        return cloudinary.api.delete_resources(publicIDs, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}