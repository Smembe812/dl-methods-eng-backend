module.exports = ({cloudinary}) => {
    return function uploadImage(image, options=null){
        if(!options){
            return cloudinary.uploader.upload(image, (error, result) => {
                if (error){
                    return Promise.reject(error)
                }
    
                return Promise.resolve(result)
            })
        }else{
            return cloudinary.uploader.upload(image, options, (error, result) => {
                if (error){
                    return Promise.reject(error)
                }

                return Promise.resolve(result)
            })
        }
    }
}