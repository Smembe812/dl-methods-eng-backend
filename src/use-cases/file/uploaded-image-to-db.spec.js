const {uploadedImageToBD} = require('./index')
const {makeFakeFile} = require('../../../__test__/fixtures')


describe('uploaded file to db use case', () => {
    it('should create new file in db', async (done) => {
        const payload = makeFakeFile()

        const {dataValues: {title, image}} = await uploadedImageToBD({title: payload.title, image: payload.image})
        
        const imageObj = JSON.parse(image)

        expect(imageObj.hasOwnProperty("version")).toBe(true)
        
        done()
    });

    it('must fail if image not provided', async (done) => {
        const payload = makeFakeFile()

        await expect(uploadedImageToBD({title: payload.title}))
            .rejects
            .toEqual(expect.any(Error))
        
        done()
    });
});
