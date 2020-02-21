const makeKnowledgeResource = require('../../entities/knowledge-resources')
const makeCreateOneKnowledgeResource = require('./create-one-knowledge-resource')
const {service} = require('../../data-access/knowledge-resource')
describe('create knowledge resource', () => {
    it('should create new kr in db', async (done) => {
        const createOneKnowledgeResource = makeCreateOneKnowledgeResource({service})
        const payload  = {
            title: "This is title",
            content: "this is some content"
        }

        try {
            const {dataValues: {title, content}} = await createOneKnowledgeResource(payload)
            
            expect({title, content}).toStrictEqual(payload)

            console.log({title, content})
            done()
        } catch (error) {
            done(error)
        }

    });

    it('should fail if title missing', async (done) => {
        const createOneKnowledgeResource = makeCreateOneKnowledgeResource({service})
        const payload  = {
            title: null,
            content: "this is some content"
        }

        try {

            await expect(createOneKnowledgeResource(payload))
            .rejects
            .toMatchObject({message:"a knowledge resource must have title"})

            done()
        } catch (error) {
            done(error)
        }
    });
    
    
});
