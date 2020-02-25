const assert = require('assert')
const makeKnowledgeResourceModel = require('./model')
const makeKnowledgeResourceService = require('./service')
const {define, ORM} = require('../db/')

const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')


describe('knowledge resource data query', () => {
    it('create new knowledge resource', async (done) => {
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

    it.todo('get knowledge resources')
});
