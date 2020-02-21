const assert = require('assert')
const makeKnowledgeResource = require('./')

describe('knowlege resource factory', () => {
    it('must build KnowledgeResource factory', () => {
        assert.equal(typeof makeKnowledgeResource, "function")
    })

    it('must have title', async (done) => {

        const payload = {title: null}

        await expect(makeKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have title"})
        done()
    });

    it('must have content', async (done) => {
        const payload = {content: null, title: "this is title"}

        await expect(makeKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have some content"})
        done()
    });
    
    it('should create knowledge resource', async (done) => {
        const payload = {
            title: "This is title",
            content: "this is some content"
        }

        const {title, content} = await makeKnowledgeResource(payload)

        expect({title, content}).toStrictEqual(payload)
        
        await expect(makeKnowledgeResource(payload))
            .resolves
            .toMatchObject({})
        
        done()
    });
    
});
