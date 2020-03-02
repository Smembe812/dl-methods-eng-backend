const {updateOneProcessElementController, postProcessElementController} = require('./')
const {makeFakeProcessElement} = require('../../../__test__/fixtures/')

describe('update process element controller', () => {
    it('succesfully update a process element', async (done) => {

        const fakeProcessElementPost = makeFakeProcessElement()
        const fakeProcessElementUpdate = makeFakeProcessElement()

        
        const {dataValues} = await postProcessElementController({body: fakeProcessElementPost})
        
        const expected  = {
            title: fakeProcessElementUpdate.title,
            aim: fakeProcessElementUpdate.aim,
            outcome: fakeProcessElementUpdate.outcome,
            description: fakeProcessElementUpdate.description,
            id: dataValues.id,
            createdAt: dataValues.createdAt
        }

        const {updatedData: {updatedAt, ...updatedPE}} = await updateOneProcessElementController({
            body: fakeProcessElementUpdate, 
            params: {id: dataValues.id}
        })
        
        expect(updatedPE).toStrictEqual(expected)
        done()
    })

    it('should error at failiure', async (done) => {

        const {outcome, description, aim} = makeFakeProcessElement()

        await expect(updateOneProcessElementController(
            {body: {outcome, description, aim}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
