const { 
    getAllProcessElements, 
    createOneProcessElement, 
    getByIDProcessElements
    } = require('./index')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('get process elements use cases', () => {
    it('should get all process elements', async (done) => {
        const payload = makeFakeProcessElement()

        createOneProcessElement(payload)
            .then(async () => {
                const processElements = await getAllProcessElements()
        
                expect(processElements.length > 0).toBe((true))
                done()

            })
    })


    it('should get process element by id', async (done) => {
        const payload = makeFakeProcessElement()
        createOneProcessElement(payload)
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                const processElement = await getByIDProcessElements(id)
                
                expect(dataValues).toStrictEqual((processElement.dataValues))
                done()

            })
    })

    it('should fail to get process element by id not valid', async (done) => {
        const payload = makeFakeProcessElement()
        createOneProcessElement(payload)
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                await expect(getByIDProcessElements(1000))
                .rejects
                .toMatchObject({message:"could not find the process element"})
                
                done()

            })
    })

    it.todo('query process elements')

    it.todo('should delete process element')
});
