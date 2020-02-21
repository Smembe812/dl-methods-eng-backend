const assert = require('assert')
const makeKnowledgeResourceModel = require('./knowledge-resource.js')
const makeKnowledgeResourceService = require('./service')
const {define, ORM} = require('../db/')

describe('knowledge resource data query', () => {
    it('create new knowledge resource', async (done) => {
        try {
            const KnowledgeResource = makeKnowledgeResourceModel({define, ORM})
            const service = makeKnowledgeResourceService(KnowledgeResource)
            const input = {title: 'New Resource', content: "KR contenr"}
            const {dataValues: {title, content}} = await service.createOne(input)
            
            expect({title, content}).toStrictEqual(input)
            done()
        } catch (error) {
            console.log(error)
            assert.equal(1,2)
            done(error)
        }
    });

});
