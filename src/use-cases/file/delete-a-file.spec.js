const {deleteOneFile, uploadAnImage} = require('./index')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('delete file use case', () => {
    // beforeAll(async (done) => {
    //     const payload = makeFakeFile()

    //     const {dataValues: {id}} = await uploadAnImage([
    //         {
    //             directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
    //             options: {tags: "test_env"}
    //         },
    //         {title: payload.title}
    //     ])

    //     done()
    // })


    it('should delete file', async (done) => {
        const payload = makeFakeFile()

        const {dataValues: {public_id}} = await uploadAnImage([
            {
                directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                options: {tags: "test_env"}
            },
            {title: payload.title}
        ])

        const deleted = await deleteOneFile(public_id)
        expect(deleted).toStrictEqual(1)
        done()
    });

    // it('should fail when file id missing', async (done) => {
        
    //     await expect(deleteOneFile(100000))
    //         .rejects
    //         .toMatchObject(
    //             {
    //                 message: "could not find the file",
    //                 status: 404,
    //             })
        
    //     done()
    // });
    
    
});
