const {getByIDTechniqueController, postTechniqueController,} = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('get technique controller by id', () => {

    it('should succesfully get technique by ID', async (done) => {
        const fakeTechniquePost = makeFakeTechnique()

        postTechniqueController({body: fakeTechniquePost})
            .then(async ({dataValues: {id}, dataValues}) => {
                const expected = dataValues
                const received = await getByIDTechniqueController({
                    params: {id}})
                
                expect(received.dataValues).toStrictEqual(expected)
                done()
            })
    })
});
