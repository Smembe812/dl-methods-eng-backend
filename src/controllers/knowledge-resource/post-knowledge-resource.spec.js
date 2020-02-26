const {postKnowledgeResource} = require('./')

describe('post knowledge resource controller', () => {
    it('succesfully post new knowledge resource', async (done) => {

        const fakeKnowledgeResourcePost = {
            title: "This is title",
            content: "this is some content"
        }

        const expected  = {
            title: "This is title",
            content: "this is some content"
        }

        postKnowledgeResource({body: fakeKnowledgeResourcePost})
            .then(({dataValues: {title, content}}) => {
        
                expect({title, content}).toStrictEqual(expected)
                done()
            })
        
    })
    it('should error at failiure', async () => {

        const fakeKnowledgeResourcePost = {
            title: null,
            content: "this is some content"
        }

        await expect(postKnowledgeResource({body: fakeKnowledgeResourcePost}))
                    .rejects
                    .toEqual(expect.any(Error))
    })
});
