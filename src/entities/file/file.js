module.exports = () => {
    return ({image, title}) =>{
        if (!image){
            return Promise.reject(new Error("a file must have image property"))
        }

        if (title){
            return Promise.resolve(
                Object.freeze({
                    title, 
                    image,
                    public_id: image.public_id
                })
            )
        }

        return Promise.resolve(
            Object.freeze({image, public_id: image.public_id})
        )
    }
}