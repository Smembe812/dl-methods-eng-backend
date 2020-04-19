const {uploadAnImage, getByIDFile, getAllFiles, deleteOneFile} = require('../../use-cases/file')
const makeUploadFile = require('./upload-file')

// const {updateFile} = require('../../use-cases/file')
// const makeUpdateFile = require('./update-a-File')

const makeGetAllFile = require('./get-all-files')

const makeGetByIDFile = require('./get-by-id-file')

// const {deleteOneFile} = require('../../use-cases/file')
const makeDeleteOneFile = require('./delete-a-file')

const uploadFileController = makeUploadFile({uploadAnImage})
// const updateOneFileController = makeUpdateFile({updateFile})
const getAllFilesController = makeGetAllFile({getAllFiles})
const getByIDFileController = makeGetByIDFile({getByIDFile})
const deleteOneFileContoller = makeDeleteOneFile({deleteOneFile})

module.exports = {
    uploadFileController,
    // updateOneFileController,
    getAllFilesController,
    getByIDFileController,
    deleteOneFileContoller
}