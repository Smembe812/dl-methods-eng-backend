
const app = require('./index')

function startServer(PORT = '3000'){
    return app.listen(PORT, () => {
        console.log(`server up at ${PORT}`) 
    })
}

startServer()

module.exports = startServer