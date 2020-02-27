const assert = require('assert')
const makeKnowledgeResourceModel = require('./model')
const makeKnowledgeResourceService = require('./service')
const {define, ORM} = require('../db/')

const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')


describe('knowledge resource data-access', () => {
    it('should create new knowledge resource', async (done) => {
        try {
            const KnowledgeResource = makeKnowledgeResourceModel({define, ORM})
            const service = makeKnowledgeResourceService(KnowledgeResource)
            const input = makeFakeKnowledgeResource()
            
            const {dataValues: {title, content}} = await service.createOne(input)
            expect({title, content}).toStrictEqual(input)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });

    it('should get all knowledge resources', async (done) => {
        const KnowledgeResource = makeKnowledgeResourceModel({define, ORM})
        const service = makeKnowledgeResourceService(KnowledgeResource)
        
        const knowledgeResources = await service.getAll()

        expect(knowledgeResources.length > 0).toBe((true))

        //expect({title, content}).toStrictEqual(input)
        done()
    })

    it('should get one knowledge resource by id', async (done) => {
        const KnowledgeResource = makeKnowledgeResourceModel({define, ORM})
        const service = makeKnowledgeResourceService(KnowledgeResource)
        
        const input = makeFakeKnowledgeResource()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const knowledgeResource = await service.getByID(id)

        expect(knowledgeResource.dataValues).toStrictEqual((dataValues))

        //expect({title, content}).toStrictEqual(input)
        done()
    })

    it('should update a knowledge resource', async (done) => {
        const KnowledgeResource = makeKnowledgeResourceModel({define, ORM})
        const service = makeKnowledgeResourceService(KnowledgeResource)
        const input = makeFakeKnowledgeResource()
        
        const {dataValues: {id}} = await service.createOne(input)
    
        const input2 = Object.assign(makeFakeKnowledgeResource(), {id})

        const {title, content} = input2

        let {...updatedValues} = await service.updateOne(input2)
         
        updatedValues = {
            title: updatedValues.title,
            content:updatedValues.content
        }

        expect(updatedValues).toStrictEqual({title, content})
        done()
    })

    it.todo('should delete a knowledge resource')

    it.todo('should query/filter knowledge resource')
});
