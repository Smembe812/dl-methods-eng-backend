const makeFileModel = require('./model')
const makeFileService = require('./service')
const {define, ORM} = require('../db/')

const {makeFakeFile} = require('../../../__test__/fixtures/')


describe('file data-access', () => {
    it('should create new file', async (done) => {
            const File = makeFileModel({define, ORM})
            const service = makeFileService(File)
            const input = makeFakeFile()
            
            const fakeImageJSON = {
                public_id: 'sample_remote',
                version: 1336304441,
                signature: 'abcde20044f8c8ba71fb31ebe81e9d72ec8763dd',
                width: 100,
                height: 100,
                format: 'jpg',
                resource_type: 'image',
                url: 'http://res.cloudinary.com/demo/image/upload/v1336304441/sample_remote.jpg',
                secure_url: 'https://d3jpl91pxevbkh.cloudfront.net/demo/image/upload/v1336304441/sample_remote.jpg'
            }

            const {dataValues: {title, aim, description, outcome}} = await service.createOne(input)
            expect({title, aim, description, outcome}).toStrictEqual(input)
            done()
    });

    it('should get all files', async (done) => {
        const File = makeFileModel({define, ORM})
        const service = makeFileService(File)

        const input = makeFakeFile()
        await service.createOne(input)
        const Files = await service.getAll()

        expect(Files.length > 0).toBe((true))
        done()
    })

    it('should get one file by id', async (done) => {
        const File = makeFileModel({define, ORM})
        const service = makeFileService(File)
        
        const input = makeFakeFile()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const File = await service.getByID(id)

        expect(File.dataValues).toStrictEqual((dataValues))

        //expect({title, content}).toStrictEqual(input)
        done()
    })
    

    it('should update a file', async (done) => {
        const File = makeFileModel({define, ORM})
        const service = makeFileService(File)
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)
    
        const input2 = Object.assign(makeFakeFile(), {id})

        const {title, aim, description, outcome} = input2

        let {...updatedValues} = await service.updateOne(input2)
         
        updatedValues = {
            title: updatedValues.title,
            aim: updatedValues.aim, 
            description: updatedValues.description, 
            outcome: updatedValues.outcome
        }

        expect(updatedValues).toStrictEqual({title, aim, description, outcome})
        done()
    })

    it('should delete a file', async (done) => {
        const File = makeFileModel({define, ORM})
        const service = makeFileService(File)
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id})

        expect(deleted).toStrictEqual(1)
        done()
    })

    it('should fail to delete a file', async (done) => {
        const File = makeFileModel({define, ORM})
        const service = makeFileService(File)
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id: 10000})

        expect(deleted).toStrictEqual(0)
        done()
    })

    it.todo('should query/filter file')
});
