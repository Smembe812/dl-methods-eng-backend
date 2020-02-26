module.exports = (KnowledgeResource) => {
    async function createOne(input){
        try {
            const data = await KnowledgeResource.create(input)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }


    async function getAll(){
        try {
            return await KnowledgeResource.findAll()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return Object.freeze({
        createOne,
        getAll
    })
}