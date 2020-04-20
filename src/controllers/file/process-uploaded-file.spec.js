const {processUplodedFileController} = require('./')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('process uploaded file controller', () => {
    it('succesfully process new file', async (done) => {

        const {image, public_id, title} = makeFakeFile()

        const {dataValues: {
                id,
                createdAt,
                updatedAt,
                ...restOfProps
            }
        } = await processUplodedFileController({
            body: {
                title
            },
            file:{
                image,
            }
        })

        expect(({...restOfProps})).toStrictEqual({
            image: JSON.stringify(image), 
            title, 
            public_id
        })

        done()
    })
    it('should error at faliure', async (done) => {

        const {title, ...restOfProps} = makeFakeFile()


        await expect(processUplodedFileController({body: {title}, file: null}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
