const { processUplodedFileController, 
        getAllFilesController, 
        getByIDFileController,
        // updateOneTechniqueController,
        deleteOneFileContoller } = require('../controllers/file')

const {cloudinary} = require('../cloudinary')

const makeUploadMiddleware = require('../express-middlewares/file-upload')

const uploadMiddleware = makeUploadMiddleware({cloudinary})

/**
 * @param {object} router - The express router instance.
 * @param {function} makeCallback - Express HTTPRequest callback
 * @requires {function} postTechnique - Controller for posting new technique
 * @returns {object} router - Express router instance
 */
module.exports = ({express, makeCallback}) => {
    const router = express.Router()  
    router.post('/', uploadMiddleware, makeCallback(processUplodedFileController))
    router.get('/', makeCallback(getAllFilesController))
    router.get('/:id', makeCallback(getByIDFileController))
    // router.put('/:id', makeCallback(updateOneTechniqueController))
    router.delete('/:id', makeCallback(deleteOneFileContoller))
    
    return router
}