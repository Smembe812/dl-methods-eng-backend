const {deleteOneKnowledgeResource, createOneKnowledgeResource} = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('delete knowledge resource use case', () => {
    it('should delete knkowledge resource', async (done) => {
        const payload = makeFakeKnowledgeResource()

        try {
            const {dataValues: {id}} = await createOneKnowledgeResource(payload)

            const deleted = await deleteOneKnowledgeResource(id)
            
            expect(deleted).toStrictEqual(1)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('should fail when deleting invalid knkowledge resource', async (done) => {
        const payload = makeFakeKnowledgeResource()

        
        const {dataValues: {id}} = await createOneKnowledgeResource(payload)

        
        await expect(deleteOneKnowledgeResource(100000))
            .rejects
            .toMatchObject(
                {
                    message: "could not find the knowledge resource",
                    status: 404,
                })
        
        done()
    });
    
    
});
