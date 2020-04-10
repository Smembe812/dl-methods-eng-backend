module.exports = ({cloudinary}) => {
    return function createFolder(folderName){
        return cloudinary.api.create_folder(folderName, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}