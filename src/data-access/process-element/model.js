module.exports = ({define, ORM}) => {
    const Types = ORM
    const ProcessElement = define('process_element', {
        title:{
            type: Types.STRING
        },
        aim: {
            type: Types.TEXT
        },
        description: {
            type: Types.TEXT
        }, 
        outcome: {
            type: Types.STRING
        }
    },
    {})

    return ProcessElement
}