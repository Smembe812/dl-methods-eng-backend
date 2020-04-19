const {uploadFileController} = require('./')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('upload file controller', () => {
    it('succesfully upload new file', async (done) => {

        const fakeFile = makeFakeFile()

        const {dataValues: {
                id,
                createdAt,
                updatedAt,
                ...restOfProps
            }
        } = await uploadFileController({
            body: [
                {
                    directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                    options: {tags: "test_env"}
                },
                {title: fakeFile.title}
            ]
        })

        console.warn(restOfProps)

        expect(({...restOfProps}).hasOwnProperty("image")).toBe(true)
        expect(typeof restOfProps.public_id).toBe("string")

        done()
        
    })
    it('should error at faliure', async (done) => {

        const {title, ...restOfProps} = makeFakeFile()


        await expect(uploadFileController({body: {...restOfProps}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
