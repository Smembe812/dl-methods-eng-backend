const {updateOneUserController, postUserController} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures/')

describe('update user controller', () => {
    it('succesfully update a user', async (done) => {

        const fakeUser = makeFakeUser()
        const {...fakeUpdateProps} = makeFakeUser()
        const expectedUser = userLocalMock({...fakeUpdateProps})

        
        const {...dataValues} = await postUserController({body: {...fakeUser, method: 'local'}})
        
        const expected  = {
            ...expectedUser,
            id: dataValues.id,
            createdAt: dataValues.createdAt
        }

        const {updatedData: {updatedAt, google, ...updatedUser}} = await updateOneUserController({
            body: {...fakeUpdateProps}, 
            params: {id: dataValues.id}
        })
        
        expect(updatedUser).toStrictEqual(expected)
        done()
    })

    it('should error at failiure', async (done) => {

        const {userName, ...restOfProps} = makeFakeUser()

        await expect(updateOneUserController(
            {body: {...restOfProps, method: 'local'}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
