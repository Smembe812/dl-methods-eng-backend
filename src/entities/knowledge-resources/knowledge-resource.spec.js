const assert = require('assert')
const makeKnowledgeResource = require('./')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('knowlege resource factory', () => {
    it('must build KnowledgeResource factory', () => {
        assert.equal(typeof makeKnowledgeResource, "function")
    })

    it('must have title', async (done) => {
        const {title, content} = makeFakeKnowledgeResource()
        const payload = {title: null, content}

        await expect(makeKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have title"})
        done()
    });

    it('must have content', async (done) => {
        const {title, content} = makeFakeKnowledgeResource()
        const payload = {title, content: null}

        await expect(makeKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have some content"})
        done()
    });
    
    it('should create knowledge resource', async (done) => {
        const {title, content} = makeFakeKnowledgeResource()
        const payload = {title, content}
        
        await expect(makeKnowledgeResource(payload))
            .resolves
            .toStrictEqual({title, content})
        
        done()
    });
    
});
