const {makeFile} = require('./index.js')
const {makeFakeFile} = require('../../../__test__/fixtures/')

describe('File Entity', () => {
    it('Must have image property', async (done) => {
        const fakeImageProps = makeFakeFile() 
        const imageProps = await makeFile(fakeImageProps)

        expect(imageProps.hasOwnProperty("image")).toBe(true)
        done()
    }
    )
});