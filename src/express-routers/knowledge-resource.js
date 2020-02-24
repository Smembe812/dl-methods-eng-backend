const { postKnowledgeResource } = require('../controllers/knowledge-resource')

module.exports = ({express, makeCallback}) => {
    const router = express.Router()
       
    router.post('/', makeCallback(postKnowledgeResource))

    return router
}