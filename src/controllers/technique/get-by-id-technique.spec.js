const {getByIDProcessElementsController, postProcessElementController} = require('./')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('get process element controller by id', () => {

    it('should succesfully get process element by ID', async (done) => {
        const fakeProcessElementPost = makeFakeProcessElement()

        postProcessElementController({body: fakeProcessElementPost})
            .then(async (processElement) => {
                const {dataValues} = await getByIDProcessElementsController({params: {id: processElement.dataValues.id}})
                
                expect(processElement.dataValues).toStrictEqual(dataValues)
                done()
            })
    })
});
