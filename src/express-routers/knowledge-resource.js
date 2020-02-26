const { postKnowledgeResource, getAllKnowledgeResourcesController, getByIDKnowledgeResourcesController } = require('../controllers/knowledge-resource')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postKnowledgeResource - Controller for posting new knowledge resource
 * @returns {object} router - Express router instance
 */
module.exports = ({router, makeCallback}) => {      
    router.post('/', makeCallback(postKnowledgeResource))
    router.get('/', makeCallback(getAllKnowledgeResourcesController))
    router.get('/knowledge-resources/:id', makeCallback(getByIDKnowledgeResourcesController))
    
    return router
}