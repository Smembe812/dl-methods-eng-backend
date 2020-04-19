const {getAllTechniquesController, postTechniqueController} = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('getall techniques controller', () => {
    
    it('should succesfully get all techniques', async (done) => {
        const fakeTechniquePost = makeFakeTechnique()

        await postTechniqueController({body: fakeTechniquePost})
         
        const aTechniques = await getAllTechniquesController({})
        expect(aTechniques.length > 0).toBe((true))
        done()
    })
});
