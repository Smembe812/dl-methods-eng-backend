const { postKnowledgeResource } = require('../controllers/knowledge-resource')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 */
module.exports = ({router, makeCallback}) => {      
    router.post('/', makeCallback(postKnowledgeResource))

    return router
}