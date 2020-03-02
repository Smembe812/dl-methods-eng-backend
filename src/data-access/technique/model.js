module.exports = ({define, ORM}) => {
    const Types = ORM
    const Technique = define('technique', {
        title:{
            type: Types.STRING
        },
        aim: {
            type: Types.TEXT
        },
        description: {
            type: Types.TEXT
        }, 
        how: {
            type: Types.TEXT
        },
        when: {
            type: Types.TEXT
        },
        whenNot: {
            type: Types.TEXT
        },
        combinableWith: {
            type: Types.TEXT
        }
    },
    {})

    return Technique
}