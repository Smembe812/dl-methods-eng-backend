const {updateOneTechniqueController, postTechniqueController} = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures/')

describe('update technique controller', () => {
    it('succesfully update a technique', async (done) => {

        const fakeTechniquePost = makeFakeTechnique()
        const {...fakeUpdateProps} = makeFakeTechnique()

        
        const {dataValues} = await postTechniqueController({body: fakeTechniquePost})
        
        const expected  = {
            ...fakeUpdateProps,
            id: dataValues.id,
            createdAt: dataValues.createdAt
        }

        const {updatedData: {updatedAt, ...updatedTechnique}} = await updateOneTechniqueController({
            body: {...fakeUpdateProps}, 
            params: {id: dataValues.id}
        })
        
        expect(updatedTechnique).toStrictEqual(expected)
        done()
    })

    it('should error at failiure', async (done) => {

        const {title, ...restOfProps} = makeFakeTechnique()

        await expect(updateOneTechniqueController(
            {body: {...restOfProps}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
