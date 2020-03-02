const {deleteOneProcessElementContoller, postProcessElementController} = require('./')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('delete process element controller', () => {
    it('succesfully delete a process element', async (done) => {

        const fakeProcessElementPost = makeFakeProcessElement()

        
        const {dataValues} = await postProcessElementController({body: fakeProcessElementPost})
        
        const deleted = await deleteOneProcessElementContoller({
            params: {id: dataValues.id}
        })
        
        expect(deleted).toStrictEqual({deleted: true, status: 201})
        done()
    })

    it('should error at failiure', async (done) => {
        await expect(deleteOneProcessElementContoller({params: {id:100000}}))
                    .rejects
                    .toMatchObject(
                        {
                            message: "could not find the process element",
                            status: 404,
                        })
        done()
    })
});
