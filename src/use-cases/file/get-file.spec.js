const { 
    uploadAnImage, 
    getByIDFile,
    getAllFiles
    } = require('./index')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('get files use cases', () => {
    beforeAll(async (done) => {
        const payload = makeFakeFile()

        const {dataValues: {id}} = await uploadAnImage([
            {
                directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                options: {tags: "test_env"}
            },
            {title: payload.title}
        ])

        done()
    })

    it('should get all files', async (done) => {
        const files = await getAllFiles()
        expect(files.length > 0).toBe(true)

        done()
    })


    it('should get file by id', async (done) => {
        const payload = makeFakeFile()

        const {dataValues: {id}} = await uploadAnImage([
            {
                directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                options: {tags: "test_env"}
            },
            {title: payload.title}
        ])

        const {dataValues: {image}} = await getByIDFile(id)
      
        expect(image.hasOwnProperty("version")).toBe(true)
        done()
    })

    it('should fail to get file by id not valid', async (done) => {
        
        await expect(getByIDFile(1000))
        .rejects
        .toMatchObject({message:"could not find the file"})
        
        done()
    })

    it.todo('query files')

    it.todo('should delete file')
});
