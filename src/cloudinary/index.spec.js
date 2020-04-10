const { 
    uploadImage, 
    deleteImage, 
    getAllImages, 
    deleteImages, 
    createUploadPreset} = require('./')
const {makeFakeImage} = require('../../__test__/fixtures/index')

describe('Testing upload', () => {
    beforeAll(async (done) => {
       
        done()
    })
    
    afterAll(async (done) => {
        const {resources} = await getAllImages()
        const results = await deleteImages([resources])
        console.log(results)
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

    it('should delete all images', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)
        
        const {deleted} = await deleteImages([public_id])

        expect(deleted[public_id]).toBe("deleted")
        done()
    });

    it('should get all images', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)
        
        const {resources} = await getAllImages()

        console.warn(resources)

        expect(public_id).toBe(resources[0].public_id)
        done()
    });

    it('should create upload preset', async (done) => {
        const {message} = await createUploadPreset(
            { 
                name: "testEnv", 
                unsigned: true, 
                tags: "test", 
                allowed_formats: "jpg,png" 
            })
        expect(message).toBe("created")
        done()
    });

    it('should get all images', async (done) => {
        const {public_id} = await uploadImage(`${__dirname}/../../__test__/fixtures/image.jpg`)
        
        const {resources} = await getAllImages()

        console.warn(resources)

        expect(public_id).toBe(resources[0].public_id)
        done()
    });


});
