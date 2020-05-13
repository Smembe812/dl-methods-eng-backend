const { 
    getAllUsers, 
    createUser,
    // createOneTechnique, 
    getByIDUser
    } = require('./index')
const {userLocalMock, makeFakeUser} = require('../../../__test__/fixtures')

describe('get users use-cases', () => {
    it('should get all users', async (done) => {
        const payload = makeFakeUser()

        createUser({method: "local", payload})
            .then(async () => {
                const users = await getAllUsers()
        
                expect(users.length > 0).toBe((true))
                done()

            })
    })


    it('should get user by id', async (done) => {
        const payload = makeFakeUser()

        createUser({method: "local", payload})
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                const user = await getByIDUser(id)
                
                expect(dataValues).toStrictEqual((user.dataValues))
                done()

            })
    })

    it('should fail to get user by id not valid', async (done) => {
        const payload = makeFakeUser()
        
        createUser({method: "local", payload})
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                await expect(getByIDUser(1000))
                .rejects
                .toMatchObject({message:"could not find the user"})
                
                done()
            })
    })

    // it.todo('query techniques')

    // it.todo('should delete technique')
});
