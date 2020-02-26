const {getAllKnowledgeResourcesController, postKnowledgeResource} = require('./')

describe('get all knowledge resource controller', () => {
    
    beforeEach( async (done) => {
        
        done()
    })

    it('should succesfully get all knowledge resources', async (done) => {
        const fakeKnowledgeResourcePost = {
            title: "This is title",
            content: "this is some content"
        }

        postKnowledgeResource({body: fakeKnowledgeResourcePost})
            .then(async () => {
                const krs = await getAllKnowledgeResourcesController()
                expect(krs.length > 0).toBe((true))
                done()
            })
    })
});
