const { 
    uploadImage, 
    deleteImage, 
    getAllImages, 
    deleteImages, 
    getImagesByTag,
    getImagesByIDs,
    createUploadPreset,
    deleteUploadPreset,
    createFolder,
    deleteFolder
} = require('./')
const {makeFakeImage} = require('../../__test__/fixtures/index')

describe('Testing upload', () => {
    // beforeAll(async (done) => {

    //     // await createFolder("test-directory")
    //     done()
    // })
    
    afterAll(async (done) => {
        const {resources} = await getImagesByTag("test_env")
        const imagesIds = resources.map(image => image.public_id)
        await deleteImages(imagesIds)
        
        // await deleteFolder("test-directory")
        done()
    })

    it('should upload image', async (done) => {
        const uploaded = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})

        const expected = "version"

        expect(true).toBe(uploaded.hasOwnProperty(expected))
        done()
    });

    it('should delete image', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        
        const {result} = await deleteImage(public_id)

        expect(result).toBe("ok")
        done()
    });

    it('should delete all images', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        
        const {deleted} = await deleteImages([public_id])

        expect(deleted[public_id]).toBe("deleted")
        done()
    });

    it('should get all images', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        
        const {resources} = await getAllImages()

        expect(public_id).toBe(resources[0].public_id)
        done()
    });

    it('should get images by tag', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        
        const {resources} = await getImagesByTag("test_env")

        console.warn(resources)

        expect(public_id).toBe(resources[0].public_id)
        done()
    });

    it('should get images by ids', async (done) => {
        const first = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        const second = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`, {tags: "test_env"})
        
        const imageIDs = [first.public_id, second.public_id]
        const {resources} = await getImagesByIDs(imageIDs)

        console.warn(resources)

        expect(second.public_id).toBe(resources[1].public_id)
        done()
    });

    it('should create then deleteupload preset', async (done) => {
        const {message} = await createUploadPreset(
            { 
                name: "testCase", 
                unsigned: true, 
                tags: "testCase", 
                allowed_formats: "jpg,png" 
            })
        expect(message).toBe("created")

        const deleted = await deleteUploadPreset("testCase")

        expect(deleted.message).toBe("deleted")
        done()
    });

    // it('should delete upload preset', async (done) => {
    //     const {message} = await deleteUploadPreset("testEnv")
    //     expect(message).toBe("deleted")
    //     done()
    // });


});
