const {deleteOneTechniqueContoller, postTechniqueController} = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('delete technique controller', () => {
    it('succesfully delete a technique', async (done) => {

        const fakeTechniquePost = makeFakeTechnique()

        
        const {dataValues} = await postTechniqueController({body: fakeTechniquePost})
        
        const deleted = await deleteOneTechniqueContoller({
            params: {id: dataValues.id}
        })
        
        expect(deleted).toStrictEqual({deleted: true, status: 201})
        done()
    })

    it('should error at failiure', async (done) => {
        await expect(deleteOneTechniqueContoller({params: {id:100000}}))
                    .rejects
                    .toMatchObject(
                        {
                            message: "could not find the technique",
                            status: 404,
                        })
        done()
    })
});
