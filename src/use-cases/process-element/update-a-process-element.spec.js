const {updateProcessElement, createOneProcessElement} = require('./index')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('update process element use case', () => {
    it('should update process element', async (done) => {
        const payload = makeFakeProcessElement()
        const payload2 = makeFakeProcessElement()

        try {
            const {dataValues} = await createOneProcessElement(payload)

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

            console.log(expectedUpdated, payload2)

            /**
             * construct this object
             * {id, title, createdAt, content}
             */
            const {updatedAt, ...updatedKR} = await updateProcessElement(updatePayload)
            
            expect(updatedKR).toStrictEqual(expectedUpdated)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    // it('must fail if id not found', async (done) => {
    //     const {title, content} = makeFakeProcessElement()
    //     const payload = {title: null, content}

    //     await expect(updateProcessElement(payload))
    //         .rejects
    //         .toMatchObject({message:"a process element must have title"})
    //     done()
    // });

    // it('must fail if content missing', async (done) => {
    //     const {title, content} = makeFakeProcessElement()
    //     const payload = {title, content: null}

    //     await expect(updateProcessElement(payload))
    //         .rejects
    //         .toMatchObject({message:"a process element must have some content"})
    //     done()
    // });
    
    
});
