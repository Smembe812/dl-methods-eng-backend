
const app = require('./index')

function startServer(PORT = '3000'){
    return app.listen(PORT, () => {
        console.log(`server up at ${PORT}`) 
    })
}
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

startServer(process.env.PORT)

module.exports = startServer