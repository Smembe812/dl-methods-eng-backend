const {getAllUsersController, postUserController} = require('./')
const {makeFakeUser} = require('../../../__test__/fixtures')

describe('get all users controller', () => {
    
    it('should succesfully get all users', async (done) => {
        const fakeUser = makeFakeUser()

        await postUserController({body: {...fakeUser, method: 'local'}})
         
        const user = await getAllUsersController({})
        expect(user.length > 0).toBe((true))
        done()
    })
});
