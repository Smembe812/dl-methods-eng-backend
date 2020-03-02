const { postKnowledgeResource, 
        getAllKnowledgeResourcesController, 
        getByIDKnowledgeResourcesController,
        updateOneKnowledgeResource,
        deleteOneKnowledgeResourceContoller } = require('../controllers/knowledge-resource')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postKnowledgeResource - Controller for posting new knowledge resource
 * @returns {object} router - Express router instance
 */
module.exports = ({express, makeCallback}) => {   
    const router = express.Router()   
    router.post('/', makeCallback(postKnowledgeResource))
    router.get('/', makeCallback(getAllKnowledgeResourcesController))
    router.get('/:id', makeCallback(getByIDKnowledgeResourcesController))
    router.put('/:id', makeCallback(updateOneKnowledgeResource))
    router.delete('/:id', makeCallback(deleteOneKnowledgeResourceContoller))
    
    return router
}