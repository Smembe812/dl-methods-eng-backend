const {deleteOneTechnique, createOneTechnique} = require('./index')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('delete technique use case', () => {
    it('should delete technique', async (done) => {
        const payload = makeFakeTechnique()

        try {
            const {dataValues: {id}} = await createOneTechnique(payload)

            const deleted = await deleteOneTechnique(id)
            
            expect(deleted).toStrictEqual(1)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('should fail when deleting invalid technique', async (done) => {
        const payload = makeFakeTechnique()

        
        const {dataValues: {id}} = await createOneTechnique(payload)

        
        await expect(deleteOneTechnique(100000))
            .rejects
            .toMatchObject(
                {
                    message: "could not find the technique",
                    status: 404,
                })
        
        done()
    });
    
    
});
