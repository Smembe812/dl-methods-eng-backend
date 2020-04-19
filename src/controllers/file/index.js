const {uploadAnImage} = require('../../use-cases/file')
const makeUploadFile = require('./upload-file')

// const {updateFile} = require('../../use-cases/file')
// const makeUpdateFile = require('./update-a-File')

// const {getAllFiles} = require('../../use-cases/file')
// const makeGetAllFile = require('./get-all-Files')

// const {getByIDFile} = require('../../use-cases/file')
// const makeGetByIDFile = require('./get-by-id-File')

// const {deleteOneFile} = require('../../use-cases/file')
// const makeDeleteOneFile = require('./delete-a-File')

const uploadFileController = makeUploadFile({uploadAnImage})
// const updateOneFileController = makeUpdateFile({updateFile})
// const getAllFilesController = makeGetAllFile({getAllFiles})
// const getByIDFileController = makeGetByIDFile({getByIDFile})
// const deleteOneFileContoller = makeDeleteOneFile({deleteOneFile})

module.exports = {
    uploadFileController,
    // updateOneFileController,
    // getAllFilesController,
    // getByIDFileController,
    // deleteOneFileContoller
}