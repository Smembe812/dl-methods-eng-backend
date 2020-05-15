const {getByIDUserController, postUserController,} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('get by id user controller', () => {

    it('should succesfully get user by ID', async (done) => {
        const fakeUser = makeFakeUser()

        postUserController({body: {...fakeUser, method: 'local'}})
            .then(async ({id, status, ...dataValues}) => {
                const expected = {id, ...dataValues}
                const received = await getByIDUserController({
                    params: {id}})
                
                expect(received.dataValues).toStrictEqual({methods: "local", ...expected})
                done()
            })
    })
});
