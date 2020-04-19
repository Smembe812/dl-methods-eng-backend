module.exports = ({define, ORM}) => {
    const Types = ORM
    const File = define('file', {
        title:{
            type: Types.STRING
        },
        image: {
            type: Types.JSONB
        },
        public_id:{
            type: Types.STRING
        }
    },
    {})

    return File
}