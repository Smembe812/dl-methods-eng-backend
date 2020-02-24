const { postKnowledgeResource } = require('../controllers/knowledge-resource')
const makeCallback = require('../express-callback')

module.exports = ({express}) => {
    const router = express.Router()

    router.post('/', makeCallback(postKnowledgeResource))

    return router
}