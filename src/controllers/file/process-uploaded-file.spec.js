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
                ...image,
            }
        })

        expect(({...restOfProps})).toStrictEqual({
            image, 
            title, 
            public_id
        })

        done()
    })
    
    it('succesfully process new file for editor', async (done) => {

        const {image, public_id, title} = makeFakeFile()

        const { file } = await processUplodedFileController({
            file:{
                ...image,
            },
            query: {
            	editor: true
            }
        })

        expect(file.hasOwnProperty("url")).toBe(true)

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
