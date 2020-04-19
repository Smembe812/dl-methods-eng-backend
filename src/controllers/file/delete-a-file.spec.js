const {deleteOneFileContoller, uploadFileController} = require('./')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('delete file controller', () => {
    it('succesfully delete a file', async (done) => {
        const fakeFile = makeFakeFile()
        
        const {dataValues} = await uploadFileController({
            body: [
                {
                    directory: `${__dirname}/../../../__test__/fixtures/image.jpg`,
                    options: {tags: "test_env"}
                },
                {title: fakeFile.title}
            ]
        })
        
        const deleted = await deleteOneFileContoller({
            params: {public_id: dataValues.public_id}
        })
        
        expect(deleted).toStrictEqual({deleted: true, status: 201})
        done()
    })

    it('should error at failiure', async (done) => {
        await expect(deleteOneFileContoller({params: {public_id:"100000"}}))
                    .rejects
                    .toMatchObject(
                        {
                            message: "could not find the file",
                            status: 404,
                        })
        done()
    })
});
