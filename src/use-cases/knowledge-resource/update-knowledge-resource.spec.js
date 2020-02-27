const {updateKnowledgeResource, createOneKnowledgeResource} = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('update knowledge resource use case', () => {
    it('should update knkowledge resource', async (done) => {
        const payload = makeFakeKnowledgeResource()
        const payload2 = makeFakeKnowledgeResource()

        try {
            const {dataValues} = await createOneKnowledgeResource(payload)

            /**
             * construct this object
             * {id, title, updatedAt, content}
             */
            const {createdAt, ...updatePayload} = Object.assign(dataValues, payload2)
            
            /**
             * construct this object
             * {id, title, createdAt, content}
             */
            const expectedUpdated = Object.assign({createdAt}, payload2, {id: updatePayload.id})

            /**
             * construct this object
             * {id, title, createdAt, content}
             */
            const {updatedAt, ...updatedKR} = await updateKnowledgeResource(updatePayload)
            
            expect(updatedKR).toStrictEqual(expectedUpdated)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    // it('must fail if id not found', async (done) => {
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
