module.exports = ({define, ORM}) => {
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

    return KnowledgeResource
}