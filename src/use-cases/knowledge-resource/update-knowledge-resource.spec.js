const {updateKnowledgeResource, createOneKnowledgeResource} = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('update knowledge resource', () => {
    it('should update knkowledge resource in db', async (done) => {
        const payload = makeFakeKnowledgeResource()
        const payload2 = makeFakeKnowledgeResource()

        try {
            const {dataValues: {id}} = await createOneKnowledgeResource(payload)

            
            const updatePayload = Object.assign(payload2, {id})

            console.log(updatePayload)

            const {dataValues: {title, content}} = await updateKnowledgeResource(updatePayload)
            console.log({title, content}, payload2)
            expect({title, content}).toStrictEqual(payload2)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    // it('must fail if title missing', async (done) => {
    //     const {title, content} = makeFakeKnowledgeResource()
    //     const payload = {title: null, content}

    //     await expect(updateKnowledgeResource(payload))
    //         .rejects
    //         .toMatchObject({message:"a knowledge resource must have title"})
    //     done()
    // });

    // it('must fail if content missing', async (done) => {
    //     const {title, content} = makeFakeKnowledgeResource()
    //     const payload = {title, content: null}

    //     await expect(updateKnowledgeResource(payload))
    //         .rejects
    //         .toMatchObject({message:"a knowledge resource must have some content"})
    //     done()
    // });
    
    
});
