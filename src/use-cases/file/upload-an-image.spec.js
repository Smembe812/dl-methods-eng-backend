const {uploadAnImage} = require('./index')
const {makeFakeFile} = require('../../../__test__/fixtures')


describe('upload file use case', () => {
    it('should create new file', async (done) => {
        const payload = makeFakeFile()

        const {dataValues: {title, image}} = await uploadAnImage([
            {
                directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                options: {tags: "test_env"}
            },
            {title: payload.title}
        ])
        
        const imageObj = JSON.parse(image)

        expect(imageObj.hasOwnProperty("version")).toBe(true)
        
        done()
    });

    it('must fail if image missing', async (done) => {
        const payload = makeFakeFile()

        await expect(
            uploadAnImage([
                {
                    directory: `${__dirname}/../../../__test__/fixtures/image404.jpg`,
                    options: {tags: "test_env"}
                },
                {title: payload.title}
            ]))
            .rejects
            .toMatchObject({message: "could not find the file", status: 404})
        
        done()
    });
});
