module.exports = ({cloudinary}) => {
    return function deleteImage(publicID){

        return cloudinary.uploader.destroy(publicID, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}