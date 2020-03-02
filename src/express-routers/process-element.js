const { postProcessElementController, 
        getAllProcessElementsController, 
        getByIDProcessElementsController,
        updateOneProcessElementController,
        deleteOneProcessElementContoller } = require('../controllers/process-element')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postProcessElement - Controller for posting new process-element
 * @returns {object} router - Express router instance
 */
module.exports = ({express, makeCallback}) => {
    const router = express.Router()  
    router.post('/', makeCallback(postProcessElementController))
    router.get('/', makeCallback(getAllProcessElementsController))
    router.get('/:id', makeCallback(getByIDProcessElementsController))
    router.put('/:id', makeCallback(updateOneProcessElementController))
    router.delete('/:id', makeCallback(deleteOneProcessElementContoller))
    
    return router
}