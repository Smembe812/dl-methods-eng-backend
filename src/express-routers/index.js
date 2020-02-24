const makeCallback = require('../express-callback')

module.exports = ({express}) => {
    const knowledgeResourceRouter = require('./knowledge-resource')({express, makeCallback})

    const router = express.Router()

    router.use('/knowledge-resources', knowledgeResourceRouter)

    return router
}