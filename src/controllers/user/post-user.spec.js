const {postUserController} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('post user controller', () => {
    it('succesfully post new user', async (done) => {

        const fakeUser = makeFakeUser()
        const expected = userLocalMock(fakeUser)

        const {dataValues: {
                id,
                createdAt,
                updatedAt,
                google,
                ...restOfProps
            }
        } = await postUserController({body: {method:"local", ...fakeUser}})

        expect({...restOfProps}).toStrictEqual(expected)
        done()
    })
    it('should error at faliure', async (done) => {

        const {title, ...restOfProps} = makeFakeUser()


        await expect(postUserController({body: {...restOfProps}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
