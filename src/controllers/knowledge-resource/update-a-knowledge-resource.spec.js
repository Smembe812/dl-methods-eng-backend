const {updateOneKnowledgeResource, postKnowledgeResource} = require('./')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('update knowledge resource controller', () => {
    it('succesfully update a knowledge resource', async (done) => {

        const fakeKnowledgeResourcePost = makeFakeKnowledgeResource()
        const fakeKnowledgeResourceUpdate = makeFakeKnowledgeResource()

        
        const {dataValues} = await postKnowledgeResource({body: fakeKnowledgeResourcePost})
        
        const expected  = {
            title: fakeKnowledgeResourceUpdate.title,
            content: fakeKnowledgeResourceUpdate.content,
            id: dataValues.id,
            createdAt: dataValues.createdAt
        }

        const {updatedData: {updatedAt, ...updatedKr}} = await updateOneKnowledgeResource({
            body: fakeKnowledgeResourceUpdate, 
            params: {id: dataValues.id}
        })
        
        expect(updatedKr).toStrictEqual(expected)
        done()
    })
    it('should error at failiure', async (done) => {

        const fakeKnowledgeResourceUpdate = {
            title: null,
            content: "this is some content"
        }

        await expect(updateOneKnowledgeResource({body: fakeKnowledgeResourceUpdate}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
