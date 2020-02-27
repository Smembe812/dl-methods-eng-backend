const bodyParser  = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const apiRoutes = require('./express-routers')({express})

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(helmet())

app.use('/api', apiRoutes)


app.use((error, req, res, next) => {
    console.log(error)

    function serializeError(errorObj){
        const errorJSON = JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))

        return JSON.parse(errorJSON)
    }

    const {message, status} = serializeError(error)

    if (status){
        return res.status(status).json({errors: [
            {message, status}
        ]})
    }

    return res.json({errors: [
        {message}
    ]})
})

module.exports = app