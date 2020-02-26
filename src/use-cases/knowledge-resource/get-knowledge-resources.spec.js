const { getAllKnowledgeResources,createOneKnowledgeResource } = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('get knowledge resources', () => {
    it('should get all knowledge resources', async (done) => {
        const payload = makeFakeKnowledgeResource()

        createOneKnowledgeResource(payload)
            .then(async () => {
                const knowledgeResources = await getAllKnowledgeResources()
        
                expect(knowledgeResources.length > 0).toBe((true))
                done()

            })
    })


    it.todo('get knowledge resource by id')
    it.todo('query knowledge resources')
});
