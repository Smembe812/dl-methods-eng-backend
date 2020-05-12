const {makeUser} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('user entity', () => {
    it('Must have first name', async (done) => {
        const {firstName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        const user = await UserFactory("local", rest)

        console.log(user)
        await expect(UserFactory("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a first name"})
        done()
    })


    it('must have last name', async (done) => {
        const {lastName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a last name"})
        done()
    })

    it('must have username', async (done) => {
        const {userName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a username"})
        done()
    })

    it('must have auth method', async (done) => {
        const {method, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory(null, rest))
        .rejects
        .toMatchObject({message:"a user must have an auth method"})
        done()
    })

    it('must have auth valid method', async (done) => {
        const {method, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory("facebook", rest))
        .rejects
        .toMatchObject({message:"unknown auth method"})
        done()
    })

    // it('Must have description', async (done) => {
    //     const {description, ...rest} = makeFakeUser()

    //     await expect(makeUser(rest))
    //     .rejects
    //     .toMatchObject({message:"a technique must have a description"})
    //     done()
    // })

    it('should make valid user', async (done) => {
        const {firstName, lastName, middleName, password, email, ...rest} = makeFakeUser()
        
        const payload = {
            firstName, 
            lastName,
            middleName,
            password,
            email,
            ...rest
        }

        const UserFactory = makeUser()

        await expect(UserFactory("local", payload))
        .resolves
        .toMatchObject(userLocalMock(payload))
        done()
    })

    // it.todo('must sanitize [aim, description] values')
    // it.todo("must create technique under strict rules")
});