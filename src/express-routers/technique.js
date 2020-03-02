const { postTechniqueController, 
        getAllTechniquesController, 
        getByIDTechniqueController,
        updateOneTechniqueController,
        deleteOneTechniqueContoller } = require('../controllers/technique')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postTechnique - Controller for posting new technique
 * @returns {object} router - Express router instance
 */
module.exports = ({express, makeCallback}) => {
    const router = express.Router()  
    router.post('/', makeCallback(postTechniqueController))
    router.get('/', makeCallback(getAllTechniquesController))
    router.get('/:id', makeCallback(getByIDTechniqueController))
    router.put('/:id', makeCallback(updateOneTechniqueController))
    router.delete('/:id', makeCallback(deleteOneTechniqueContoller))
    
    return router
}