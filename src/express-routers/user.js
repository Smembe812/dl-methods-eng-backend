const { postUserController, 
        getAllUsersController, 
        getByIDUserController,
        updateOneUserController,
        deleteUserContoller } = require('../controllers/user')

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postTechnique - Controller for posting new technique
 * @returns {object} router - Express router instance
 */
module.exports = ({express, makeCallback}) => {
    const router = express.Router()  
    router.post('/', makeCallback(postUserController))
    router.get('/', makeCallback(getAllUsersController))
    router.get('/:id', makeCallback(getByIDUserController))
    router.put('/:id', makeCallback(updateOneUserController))
    router.delete('/:id', makeCallback(deleteUserContoller))
    
    return router
}