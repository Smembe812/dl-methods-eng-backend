const {getAllProcessElementsController, postProcessElementController} = require('./')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('getall process elements controller', () => {
    
    it('should succesfully get all process elementss', async (done) => {
        const fakeProcessElementPost = makeFakeProcessElement()

        postProcessElementController({body: fakeProcessElementPost})
            .then(async () => {
                const processElements = await getAllProcessElementsController({})
                expect(processElements.length > 0).toBe((true))
            })
        done()
    })
});
