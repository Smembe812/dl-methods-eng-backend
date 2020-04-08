module.exports = ({cloudinary}) => {
    return function uploadImage(image){
        return cloudinary.uploader.upload(image, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}