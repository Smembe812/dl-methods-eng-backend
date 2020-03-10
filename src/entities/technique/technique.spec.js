const makeTechnique = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('technique entity', () => {
    it('Must have title', async (done) => {
        const {title, ...rest} = makeFakeTechnique()

        await expect(makeTechnique(rest))
        .rejects
        .toMatchObject({message:"a technique must have title"})
        done()
    })


    it('Must have aim,fail when no aim', async (done) => {
        const {aim, ...rest} = makeFakeTechnique()


        await expect(makeTechnique(rest))
        .rejects
        .toMatchObject({message:"a technique must have aim"})
        done()
    })

    it('Must have description', async (done) => {
        const {description, ...rest} = makeFakeTechnique()

        await expect(makeTechnique(rest))
        .rejects
        .toMatchObject({message:"a technique must have a description"})
        done()
    })

    it('should make valid technique', async (done) => {
        const fakeTechnique = makeFakeTechnique()

        await expect(makeTechnique(fakeTechnique))
        .resolves
        .toMatchObject(fakeTechnique)
        done()
    })

    it.todo('must sanitize [aim, description] values')
    it.todo("must create technique under strict rules")
});