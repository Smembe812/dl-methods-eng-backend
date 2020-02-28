const assert = require('assert')
const makeProcessElementModel = require('./model')
const makeProcessElementService = require('./service')
const {define, ORM} = require('../db/')

const {makeFakeProcessElement} = require('../../../__test__/fixtures/')


describe('process element data-access', () => {
    it('should create new process element', async (done) => {
            const ProcessElement = makeProcessElementModel({define, ORM})
            const service = makeProcessElementService(ProcessElement)
            const input = makeFakeProcessElement()
            
            const {dataValues: {title, aim, description, outcome}} = await service.createOne(input)
            expect({title, aim, description, outcome}).toStrictEqual(input)
            done()
    });

    it('should get all process elements', async (done) => {
        const ProcessElement = makeProcessElementModel({define, ORM})
        const service = makeProcessElementService(ProcessElement)

        const input = makeFakeProcessElement()
        await service.createOne(input)
        const processElements = await service.getAll()

        expect(processElements.length > 0).toBe((true))
        done()
    })

    it('should get one process element by id', async (done) => {
        const ProcessElement = makeProcessElementModel({define, ORM})
        const service = makeProcessElementService(ProcessElement)
        
        const input = makeFakeProcessElement()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const processElement = await service.getByID(id)

        expect(processElement.dataValues).toStrictEqual((dataValues))

        //expect({title, content}).toStrictEqual(input)
        done()
    })
    

    it('should update a process element', async (done) => {
        const ProcessElement = makeProcessElementModel({define, ORM})
        const service = makeProcessElementService(ProcessElement)
        const input = makeFakeProcessElement()
        
        const {dataValues: {id}} = await service.createOne(input)
    
        const input2 = Object.assign(makeFakeProcessElement(), {id})

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

    it('should delete a process element', async (done) => {
        const ProcessElement = makeProcessElementModel({define, ORM})
        const service = makeProcessElementService(ProcessElement)
        const input = makeFakeProcessElement()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id})

        expect(deleted).toStrictEqual(1)
        done()
    })

    it('should fail to delete a process element', async (done) => {
        const ProcessElement = makeProcessElementModel({define, ORM})
        const service = makeProcessElementService(ProcessElement)
        const input = makeFakeProcessElement()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id: 10000})

        expect(deleted).toStrictEqual(0)
        done()
    })

    it.todo('should query/filter process element')
});
