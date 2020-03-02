const {getAllKnowledgeResourcesController, postKnowledgeResource} = require('./')

describe('getall knowledge resource controller', () => {
    
    it('should succesfully get all knowledge resources', async (done) => {
        const fakeKnowledgeResourcePost = {
            title: "This is title",
            content: "this is some content"
        }

        postKnowledgeResource({body: fakeKnowledgeResourcePost})
            .then(async () => {
                const krs = await getAllKnowledgeResourcesController({})
                expect(krs.length > 0).toBe((true))
                done()
            })
    })
});
