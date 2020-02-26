const { postKnowledgeResource, getAllKnowledgeResourcesController } = require('../controllers/knowledge-resource')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postKnowledgeResource - Controller for posting new knowledge resource
 * @returns {object} router - Express router instance
 */
module.exports = ({router, makeCallback}) => {      
    router.post('/', makeCallback(postKnowledgeResource))
    router.get('/', makeCallback(getAllKnowledgeResourcesController))

    return router
}