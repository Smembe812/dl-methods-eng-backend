const bodyParser  = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//TODO: Move swagger to its own module
const swaggerJSDoc = require('swagger-jsdoc')
const swagerUIExpress = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Client API',
            servers: ['http://localhost:3000']
        }
    },
    apis: ["./src/index.js", "./expresss-routers"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)


const apiRoutes = require('./express-routers')({express})

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(helmet())

/**
 * @swagger
 * /api:
 *  get:
 *      description: Root endpoint for apis
 *      responses:
 *          '200':
 *              description: A successful response
 */
app.use('/api', apiRoutes)
app.use('/api-docs', swagerUIExpress.serve, swagerUIExpress.setup(swaggerDocs))


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