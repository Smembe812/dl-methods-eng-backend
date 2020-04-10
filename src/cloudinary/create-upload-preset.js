module.exports = ({cloudinary}) => {
    return function createUploadPreset(config){
        return cloudinary.api.create_upload_preset(config, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}