const {getByIDUserController, postUserController,} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('get by id user controller', () => {

    it('should succesfully get user by ID', async (done) => {
        const fakeUser = makeFakeUser()

        postUserController({body: {...fakeUser, method: 'local'}})
            .then(async ({dataValues: {id}, dataValues}) => {
                const expected = dataValues
                const received = await getByIDUserController({
                    params: {id}})
                
                expect(received.dataValues).toStrictEqual(expected)
                done()
            })
    })
});
