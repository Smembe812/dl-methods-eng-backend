const {createOneProcessElement} = require('../../use-cases/process-element/')
const makePostProcessElement = require('./post-process-element')

const {updateProcessElement} = require('../../use-cases/process-element/')
const makeUpdateProcessElement = require('./update-a-process-element')

const {getAllProcessElements} = require('../../use-cases/process-element/')
const makeGetAllProcessElement = require('./get-all-process-elements')

const {getByIDProcessElements} = require('../../use-cases/process-element/')
const makeGetByIDProcessElement = require('./get-by-id-process-element')

const {deleteOneProcessElement} = require('../../use-cases/process-element')
const makeDeleteOneProcessElement = require('./delete-a-process-element')

const postProcessElementController = makePostProcessElement({createOneProcessElement})
const updateOneProcessElementController = makeUpdateProcessElement({updateProcessElement})
const getAllProcessElementsController = makeGetAllProcessElement({getAllProcessElements})
const getByIDProcessElementsController = makeGetByIDProcessElement({getByIDProcessElements})
const deleteOneProcessElementContoller = makeDeleteOneProcessElement({deleteOneProcessElement})

module.exports = {
    postProcessElementController,
    updateOneProcessElementController,
    getAllProcessElementsController,
    getByIDProcessElementsController,
    deleteOneProcessElementContoller
}