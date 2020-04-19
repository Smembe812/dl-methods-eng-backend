const {getAllFilesController, uploadFileController} = require('./')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('getall files controller', () => {
    
    it('should succesfully get all files', async (done) => {
        const fakeFile = makeFakeFile()

        await uploadFileController({
            body: [
                {
                    directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                    options: {tags: "test_env"}
                },
                {title: fakeFile.title}
            ]
        })
         
        const allFiles = await getAllFilesController({})
        expect(allFiles.length > 0).toBe((true))
        done()
    })
});
