const { getAllKnowledgeResources } = require('./index')

describe('get knowledge resources', () => {
    it('should get all knowledge resources', async (done) => {
        const knowledgeResources = await getAllKnowledgeResources()
        expect(knowledgeResources.length > 0).toBe((true))
        done()
    })


    it.todo('get knowledge resource by id')
    it.todo('query knowledge resources')
});
