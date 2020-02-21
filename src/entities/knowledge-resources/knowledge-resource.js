module.exports = () => {
    return ({title, content}) =>{
        if (!title){
            return Promise.reject(new Error("a knowledge resource must have title"))
        }

        if (!content){
            return Promise.reject(new Error("a knowledge resource must have some content"))
        }

        return Promise.resolve(
            Object.freeze({title, content})
        )
    }
}