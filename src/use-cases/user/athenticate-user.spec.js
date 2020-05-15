const {authenticateUser, createUser} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('authenticate user use-case', () => {
    it("must authenticate user", async (done) => {
        const {password, email, ...user} = makeFakeUser()
        const fakeUser = userLocalMock({password, email, ...user})

        await expect(authenticateUser({password, email}))
            .toStrictEqual({fakeUser})
        done()
    })
});
