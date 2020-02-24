const { postKnowledgeResource } = require('../controllers/knowledge-resource')

/**
 * @router [express router instance dependency]
 * @makeCallback [express callback dependency]
 */
module.exports = ({router, makeCallback}) => {      
    router.post('/', makeCallback(postKnowledgeResource))

    return router
}