const {uploadImage, deleteImage} = require('./')
const {makeFakeImage} = require('../../__test__/fixtures/index')

describe('Testing upload', () => {
    afterEach(async (done) => {
        done()
    })

    it('should upload image', async (done) => {
        const uploaded = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)

        const expected = "version"

        expect(true).toBe(uploaded.hasOwnProperty(expected))
        done()
    });

    it('should delete image', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)
        
        const {result} = await deleteImage(public_id)

        expect(result).toBe("ok")
        done()
    });
});
