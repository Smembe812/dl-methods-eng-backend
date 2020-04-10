module.exports = ({cloudinary}) => {
    return function createUploadPreset(presetName){
        return cloudinary.api.delete_upload_preset(presetName, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}