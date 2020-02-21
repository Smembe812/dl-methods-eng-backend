const assert = require('assert')
const makeKnowledgeResource = require('./knowledge-resource.js')
const {define, ORM} = require('../db/')

describe('knowledge resource Sequelize Model', () => {
    it('should sync with database', async (done) => {
        try {
            const KnowledgeResource = makeKnowledgeResource({define, ORM})
            const sync = await KnowledgeResource.sync({force: true})
            
            assert.equal(1,1)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });
    
    it('should create db model', () => {
        const KnowledgeResource = makeKnowledgeResource({define, ORM})

        assert.equal(typeof KnowledgeResource, "function")
    })

});
