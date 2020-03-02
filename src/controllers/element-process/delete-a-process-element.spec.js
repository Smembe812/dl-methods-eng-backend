const {deleteOneKnowledgeResourceContoller, postKnowledgeResource} = require('./')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('delete knowledge resource controller', () => {
    it('succesfully delete a knowledge resource', async (done) => {

        const fakeKnowledgeResourcePost = makeFakeKnowledgeResource()

        
        const {dataValues} = await postKnowledgeResource({body: fakeKnowledgeResourcePost})
        
        const deleted = await deleteOneKnowledgeResourceContoller({
            params: {id: dataValues.id}
        })
        
        expect(deleted).toStrictEqual({deleted: true, status: 201})
        done()
    })

    it('should error at failiure', async (done) => {
        await expect(deleteOneKnowledgeResourceContoller({params: {id:100000}}))
                    .rejects
                    .toMatchObject(
                        {
                            message: "could not find the knowledge resource",
                            status: 404,
                        })
        done()
    })
});
