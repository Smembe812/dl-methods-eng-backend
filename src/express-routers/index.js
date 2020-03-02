const makeCallback = require('../express-callback')

/**
 * @express [express insance dependency]
 */
module.exports = ({express}) => {

    const mainRouter = express.Router()

    const knowledgeResourceRoutes = require('./knowledge-resource')({express, makeCallback})
    const processElementRoutes = require('./process-element')({express, makeCallback})

    mainRouter.use('/knowledge-resources', knowledgeResourceRoutes)
    mainRouter.use('/process-elements', processElementRoutes)

    return mainRouter
}