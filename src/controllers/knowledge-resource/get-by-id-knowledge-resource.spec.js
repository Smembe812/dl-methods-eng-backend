const {getByIDKnowledgeResourcesController, postKnowledgeResource} = require('./')

describe('get knowledge resource controller by id', () => {
    
    beforeEach( async (done) => {
        done()
    })

    it('should succesfully get knowledge resource by ID', async (done) => {
        const fakeKnowledgeResourcePost = {
            title: "This is title",
            content: "this is some content"
        }

        postKnowledgeResource({body: fakeKnowledgeResourcePost})
            .then(async (kr) => {
                const {dataValues} = await getByIDKnowledgeResourcesController({params: {id: kr.dataValues.id}})
                
                expect(kr.dataValues).toStrictEqual(dataValues)
                done()
            })
    })
});
