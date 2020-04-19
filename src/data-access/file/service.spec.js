const makeFileModel = require('./model')
const {define, ORM} = require('../db/')

const {service} = require('./')

const {makeFakeFile} = require('../../../__test__/fixtures/')


describe('file data-access', () => {
    it('should create new file', async (done) => {
        const input = makeFakeFile()

        const {dataValues: {title, image, public_id}} = await service.createOne(input)
        expect({title, image, public_id}).toStrictEqual(input)
        done()
    });

    it('should get all files', async (done) => {
        const input = makeFakeFile()
        await service.createOne(input)
        const Files = await service.getAll()

        expect(Files.length > 0).toBe((true))
        done()
    })

    it('should get one file by id', async (done) => {
        const input = makeFakeFile()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const fileRes = await service.getByID(id)

        expect(fileRes.dataValues).toStrictEqual((dataValues))

        done()
    })

    it('should get all by id', async (done) => {
        const input = makeFakeFile()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const second = await service.createOne(input)
        
        const idsToGet = [id, second.dataValues.id]
        
        const fileRes = await service.getAllByIDs(idsToGet) 

        expect(fileRes.length > 1).toBe(true)
        expect(fileRes[0].dataValues).toStrictEqual((dataValues))

        done()
    })

    it('should get all by public_id', async (done) => {
        const input = makeFakeFile()
        const first = await service.createOne(input)
        const second = await service.createOne(input)
        
        const idsToGet = [first.dataValues.public_id, second.dataValues.public_id]
        
        const fileRes = await service.getAllByPublicIDs(idsToGet) 
        
        expect(fileRes.length > 1).toBe(true)

        done()
    })

    it('should get one by public_id', async (done) => {
        const input = makeFakeFile()
        const created = await service.createOne(input)
        
        const {dataValues: {public_id, image, title}}  = await service.getOneByPublicID(created.dataValues.public_id) 
        
        expect(input).toStrictEqual({image, title, public_id})

        done()
    })
    

    it('should update a file', async (done) => {
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
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id})

        expect(deleted).toStrictEqual(1)
        done()
    })

    it('should bulk delete files', async (done) => {
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)
        const second = await service.createOne(input)

        const idsToDelete = [id, second.dataValues.id]

        let deleted = await service.deleteBulk(idsToDelete)

        expect(deleted).toStrictEqual(idsToDelete.length)
        done()
    })

    it('should fail to delete a file', async (done) => {
        const input = makeFakeFile()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id: 10000})

        expect(deleted).toStrictEqual(0)
        done()
    })

    it.todo('should query/filter file')
});
