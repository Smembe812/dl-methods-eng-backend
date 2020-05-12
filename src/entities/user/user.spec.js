const {makeUser} = require('./')
const {makeFakeUser} = require('../../../__test__/fixtures')

describe('user entity', () => {
    it('Must have first name', async (done) => {
        const {firstName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()
        await expect(UserFactory(rest))
        .rejects
        .toMatchObject({message:"a user must have a first name"})
        done()
    })


    it('must have last name', async (done) => {
        const {lastName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory(rest))
        .rejects
        .toMatchObject({message:"a user must have a last name"})
        done()
    })

    it('must have username', async (done) => {
        const {userName, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory(rest))
        .rejects
        .toMatchObject({message:"a user must have a username"})
        done()
    })

    it('must have auth method', async (done) => {
        const {method, ...rest} = makeFakeUser()
        const UserFactory = makeUser()

        await expect(UserFactory(rest))
        .rejects
        .toMatchObject({message:"a user must have an auth method"})
        done()
    })

    // it('Must have description', async (done) => {
    //     const {description, ...rest} = makeFakeUser()

    //     await expect(makeUser(rest))
    //     .rejects
    //     .toMatchObject({message:"a technique must have a description"})
    //     done()
    // })

    // it('should make valid technique', async (done) => {
    //     const fakeTechnique = makeUser()

    //     await expect(makeUser(fakeTechnique))
    //     .resolves
    //     .toMatchObject(fakeTechnique)
    //     done()
    // })

    // it.todo('must sanitize [aim, description] values')
    // it.todo("must create technique under strict rules")
});