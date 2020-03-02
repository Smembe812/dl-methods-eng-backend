const {postProcessElementController} = require('./')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('post process element controller', () => {
    it('succesfully post new process element', async (done) => {

        const fakeProcessElementPost = makeFakeProcessElement()

        const {dataValues: {
            title, aim, description, outcome}
        } = await postProcessElementController({body: fakeProcessElementPost})

        expect({title, aim, description, outcome}).toStrictEqual(fakeProcessElementPost)

        done()
        
    })
    it('should error at failiure', async (done) => {

        const {aim, description, outcome} = makeFakeProcessElement()


        await expect(postProcessElementController({body: {aim, description, outcome}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
