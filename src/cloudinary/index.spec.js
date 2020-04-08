const {uploadImage} = require('./')
const {makeFakeImage} = require('../../__test__/fixtures/index')

describe('Testing upload', () => {
    it('should upload image', async (done) => {
        const uploaded = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)
        console.log(uploaded)

        const expected = "version"

        expect(true).toBe(uploaded.hasOwnProperty(expected))
        done()
    });
});
