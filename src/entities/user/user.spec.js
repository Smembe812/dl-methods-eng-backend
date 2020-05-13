const {makeUser} = require('./')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('user entity', () => {
    it('Must have first name', async (done) => {
        const {firstName, ...rest} = makeFakeUser()

        await expect(makeUser("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a first name"})
        done()
    })


    it('must have last name', async (done) => {
        const {lastName, ...rest} = makeFakeUser()

        await expect(makeUser("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a last name"})
        done()
    })

    it('must have username', async (done) => {
        const {userName, ...rest} = makeFakeUser()

        await expect(makeUser("local", rest))
        .rejects
        .toMatchObject({message:"a user must have a username"})
        done()
    })

    it('must have auth method', async (done) => {
        const {method, ...rest} = makeFakeUser()

        await expect(makeUser(null, rest))
        .rejects
        .toMatchObject({message:"a user must have an auth method"})
        done()
    })

    it('must have auth valid method', async (done) => {
        const {method, ...rest} = makeFakeUser()

        await expect(makeUser("facebook", rest))
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


        await expect(makeUser("local", payload))
        .resolves
        .toMatchObject(userLocalMock(payload))
        done()
    })

    it('should have valid email', async (done) => {
        const {firstName, lastName, middleName, password, email, ...rest} = makeFakeUser()
        
        const payload = {
            firstName, 
            lastName,
            middleName,
            password,
            email: "not-valid",
            ...rest
        }


        await expect(makeUser("local", payload))
        .rejects
        .toMatchObject({message: '"email" must be a valid email'})
        done()
    })

    // it.todo('must sanitize [aim, description] values')
    // it.todo("must create technique under strict rules")
});