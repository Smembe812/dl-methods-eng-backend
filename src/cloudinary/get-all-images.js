module.exports = ({cloudinary}) => {
    return function getAllImages(){
        return cloudinary.api.resources((error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}