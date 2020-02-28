module.exports = () => {
    return ({title, aim, description, outcome}) =>{
        if (!title){
            return Promise.reject(new Error("a process element must have title"))
        }

        if (!aim){
            return Promise.reject(new Error("a process element must have aim"))
        }

        if (!outcome){
            return Promise.reject(new Error("a process element must have an outcome"))
        }

        if (!description){
            return Promise.reject(new Error("a process element must have a description"))
        }

        return Promise.resolve(
            Object.freeze({
                title, 
                aim, 
                description, 
                outcome
            })
        )
    }
}