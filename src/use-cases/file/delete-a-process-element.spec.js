const {deleteOneProcessElement, createOneProcessElement} = require('./index')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('delete process element use case', () => {
    it('should delete process elemenr', async (done) => {
        const payload = makeFakeProcessElement()

        try {
            const {dataValues: {id}} = await createOneProcessElement(payload)

            const deleted = await deleteOneProcessElement(id)
            
            expect(deleted).toStrictEqual(1)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('should fail when deleting invalid process elemenr', async (done) => {
        const payload = makeFakeProcessElement()

        
        const {dataValues: {id}} = await createOneProcessElement(payload)

        
        await expect(deleteOneProcessElement(100000))
            .rejects
            .toMatchObject(
                {
                    message: "could not find the process element",
                    status: 404,
                })
        
        done()
    });
    
    
});
