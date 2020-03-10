//TODO: must check if [aim, description, how, etc] are strings
module.exports = () => {
    return (
        {
            title, 
            aim, 
            description, 
            how, 
            when, 
            whenNot, 
            combinableWith}) =>{
        if (!title){
            return Promise.reject(new Error("a technique must have title"))
        }

        if (!aim){
            return Promise.reject(new Error("a technique must have aim"))
        }

        if (!description){
            return Promise.reject(new Error("a technique must have a description"))
        }

        return Promise.resolve(
            Object.freeze({
                title, 
                aim, 
                description, 
                how, 
                when, 
                whenNot, 
                combinableWith
            })
        )
    }
}