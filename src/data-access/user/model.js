module.exports = ({define, ORM}) => {
    const Types = ORM
    const User = define('user', {
        firstName:{
            type: Types.STRING
        },
        lastName: {
            type: Types.STRING
        },
        fullName: {
            type: Types.STRING
        }, 
        middleName: {
            type: Types.STRING
        },
        userName: {
            type: Types.STRING,
            required: true,
            unique: true
        },
        avatar: {
            type: Types.STRING
        },
        local: {
            type: Types.JSONB
        },
        google: {
            type: Types.JSONB
        },
        methods: {
            type: Types.ENUM,
            values: ["google", "local"]
        }
    },
    {})

    return User
}