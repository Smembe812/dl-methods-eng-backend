module.exports = ({cloudinary}) => {
    return function deleteFolder(folderName){
        return cloudinary.api.delete_folder(folderName, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}