const {deleteUserContoller, postUserController} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('delete user controller', () => {
    it('succesfully delete a user', async (done) => {

        const fakeUser = makeFakeUser()
        
        const {dataValues} = await postUserController({body: {...fakeUser, method: "google"}})
        
        const deleted = await deleteUserContoller({
            params: {id: dataValues.id}
        })
        
        expect(deleted).toStrictEqual({deleted: true, status: 201})
        done()
    })

    it('should error at failiure', async (done) => {
        await expect(deleteUserContoller({params: {id:100000}}))
                    .rejects
                    .toMatchObject(
                    {
                        message: "could not find the user",
                        status: 404,
                    })
        done()
    })
});
