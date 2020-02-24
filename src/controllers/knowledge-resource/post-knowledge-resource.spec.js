const {postKnowledgeResource} = require('./')

describe('post knowledge resource controller', () => {
    it('succesfully post new knowledge resource', async () => {

        const fakeKnowledgeResourcePost = {
            title: "This is title",
            content: "this is some content"
        }

        const expected  = {
            status: 201,
            knowledgeResource: {
                title: "This is title",
                content: "this is some content"
            }
        }

        await expect(postKnowledgeResource(fakeKnowledgeResourcePost))
                    .resolves
                    .toStrictEqual(expected)
    })
    it('should error at failiure', async () => {

        const fakeKnowledgeResourcePost = {
            title: null,
            content: "this is some content"
        }

        await expect(postKnowledgeResource(fakeKnowledgeResourcePost))
                    .rejects
                    .toEqual(expect.any(Error))
    })
});
