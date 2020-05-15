const {createUser} = require('./index')
const {userLocalMock, makeFakeUser} = require('../../../__test__/fixtures')

describe('create user use-case', () => {
    it('should create new user in db', async (done) => {
        const payload = makeFakeUser()
        const {
            firstName, 
            lastName, 
            fullName, 
            middleName, 
            userName, 
            methods, 
            avatar
        } = userLocalMock(payload)

        const {dataValues: {
            createdAt,
            updatedAt,
            id,
            google,
            local,
            ...userProps
        }} = await createUser({method: "local", payload})
        
        expect(userProps).toStrictEqual({
            firstName, 
            lastName, 
            fullName, 
            middleName, 
            userName, 
            methods, 
            avatar
        })
        
        done()

    });

    it('must fail if username', async (done) => {
        const {userName, ...payload} = makeFakeUser()

        await expect(createUser({method: "local", payload}))
            .rejects
            .toMatchObject({message:"a user must have a username"})
        done()
    });

    it('must fail if email invalid', async (done) => {
        const {email, ...payload} = makeFakeUser()

        await expect(
                createUser({
                    method: 'local',
                    payload: {
                        ...payload, 
                        email: "not-valid"
                    }
                })
            )
            .rejects
            .toMatchObject({message: '"email" must be a valid email'})
        done()
    });
    
    
});
