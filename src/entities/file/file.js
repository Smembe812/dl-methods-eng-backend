module.exports = () => {
    return ({image, title}) =>{
        if (!image){
            return Promise.reject(new Error("a file must have image property"))
        }

        if (title){
            return Promise.resolve(
                Object.freeze({
                    title, 
                    image
                })
            )
        }

        return Promise.resolve(
            Object.freeze({image})
        )
    }
}