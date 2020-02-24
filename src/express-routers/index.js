const makeCallback = require('../express-callback')

/**
 * @express [express insance dependency]
 */
module.exports = ({express}) => {

    const router = express.Router()

    const knowledgeResourceRouter = require('./knowledge-resource')({router, makeCallback})

    router.use('/knowledge-resources', knowledgeResourceRouter)

    return router
}