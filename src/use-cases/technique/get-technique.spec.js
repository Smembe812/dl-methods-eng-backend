const { 
    getAllTechniques, 
    createOneTechnique, 
    getByIDTechnique
    } = require('./index')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('get techniques use cases', () => {
    it('should get all techniques', async (done) => {
        const payload = makeFakeTechnique()

        createOneTechnique(payload)
            .then(async () => {
                const Techniques = await getAllTechniques()
        
                expect(Techniques.length > 0).toBe((true))
                done()

            })
    })


    it('should get technique by id', async (done) => {
        const payload = makeFakeTechnique()
        createOneTechnique(payload)
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                const Technique = await getByIDTechnique(id)
                
                expect(dataValues).toStrictEqual((Technique.dataValues))
                done()

            })
    })

    it('should fail to get technique by id not valid', async (done) => {
        const payload = makeFakeTechnique()
        createOneTechnique(payload)
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                await expect(getByIDTechnique(1000))
                .rejects
                .toMatchObject({message:"could not find the technique"})
                
                done()

            })
    })

    it.todo('query techniques')

    it.todo('should delete technique')
});
