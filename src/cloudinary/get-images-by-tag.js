module.exports = ({cloudinary}) => {
    return function getAllImagesByTag(tag){
        return cloudinary.api.resources_by_tag(tag, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}