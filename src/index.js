if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

console.log(process.env.DB_URI)