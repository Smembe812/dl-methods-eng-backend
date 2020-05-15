const {postUserController} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('post user controller', () => {
    it('succesfully post new user', async (done) => {

        const fakeUser = makeFakeUser()
        const {avatar, firstName, fullName, middleName, userName, lastName} = userLocalMock(fakeUser)

        const {
                id,
                createdAt,
                updatedAt,
                ...restOfProps
        } = await postUserController({body: {method:"local", ...fakeUser}})

        expect({...restOfProps}).toStrictEqual({status: 201, avatar, firstName, fullName, middleName, userName, lastName})
        done()
    })
    it('should error at faliure', async (done) => {

        const {userName, ...restOfProps} = makeFakeUser()


        await expect(postUserController({body: {...restOfProps}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
