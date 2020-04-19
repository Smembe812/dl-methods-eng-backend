const {getByIDFileController, uploadFileController} = require('./')
const {makeFakeFile} = require('../../../__test__/fixtures')

describe('get file controller by id', () => {

    it('should succesfully get file by ID', async (done) => {
        const fakeFile = makeFakeFile()

        const {dataValues: {
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

        const received = await getByIDFileController({params: {id: restOfProps.id}})
        
        expect(received.dataValues).toStrictEqual(restOfProps)

        done()
    })
});
