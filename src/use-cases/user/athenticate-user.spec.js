const {authenticateUser, createUser} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('authenticate user use-case', () => {
    it("must authenticate user", async (done) => {
        const {password, email, ...payload} = makeFakeUser()
        
        const createdUser = await createUser(
            {
                method: "local", 
                payload: {
                    password, 
                    email, 
                    ...payload
                }
            })
        
        const authUser = await authenticateUser({password, email}) 
        
        expect(Object(authUser).hasOwnProperty("token"))
            .toBe(true)
        done()
    })
});
