const {define, ORM} = require('../db/')
const Types = ORM


const KnowledgeResource = define('knowledge_resource', {
    title:{
        type: Types.STRING
    },
    content: {
        type: Types.STRING
    }
},
{})

sync()

async function sync(){
    try {
        await KnowledgeResource.drop()
        const table = await KnowledgeResource.sync({force: true})
        console.log(table)
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = KnowledgeResource