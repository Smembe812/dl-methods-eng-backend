const {createOneKnowledgeResource} = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('create knowledge resource', () => {
    it('should create new knkowledge resource in db', async (done) => {
        const payload = makeFakeKnowledgeResource()

        try {
            const {dataValues: {title, content}} = await createOneKnowledgeResource(payload)
            
            expect({title, content}).toStrictEqual(payload)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('must fail if title missing', async (done) => {
        const {title, content} = makeFakeKnowledgeResource()
        const payload = {title: null, content}

        await expect(createOneKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have title"})
        done()
    });

    it('must fail if content missing', async (done) => {
        const {title, content} = makeFakeKnowledgeResource()
        const payload = {title, content: null}

        await expect(createOneKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have some content"})
        done()
    });
    
    
});
