const {createOneTechnique} = require('../../use-cases/technique/')
const makePostTechnique = require('./post-technique')

const {updateTechnique} = require('../../use-cases/technique/')
const makeUpdateTechnique = require('./update-a-technique')

const {getAllTechniques} = require('../../use-cases/technique/')
const makeGetAllTechnique = require('./get-all-techniques')

const {getByIDTechnique} = require('../../use-cases/technique/')
const makeGetByIDTechnique = require('./get-by-id-technique')

const {deleteOneTechnique} = require('../../use-cases/technique')
const makeDeleteOneTechnique = require('./delete-a-technique')

const postTechniqueController = makePostTechnique({createOneTechnique})
const updateOneTechniqueController = makeUpdateTechnique({updateTechnique})
const getAllTechniquesController = makeGetAllTechnique({getAllTechniques})
const getByIDTechniqueController = makeGetByIDTechnique({getByIDTechnique})
const deleteOneTechniqueContoller = makeDeleteOneTechnique({deleteOneTechnique})

module.exports = {
    postTechniqueController,
    updateOneTechniqueController,
    getAllTechniquesController,
    getByIDTechniqueController,
    deleteOneTechniqueContoller
}