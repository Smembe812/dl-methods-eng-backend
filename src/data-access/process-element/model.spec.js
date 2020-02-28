const assert = require('assert')
const makeProcessElement = require('./model')
const {define, ORM} = require('../db')

describe('Process Element Sequelize Model', () => {
    it('should sync with database', async (done) => {
        try {
            const ProcessElement = makeProcessElement({define, ORM})
            const sync = await ProcessElement.sync({force: true})

            assert.equal(1,1)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });
    
    it('should create db model', (done) => {
        const ProcessElement = makeProcessElement({define, ORM})

        assert.equal(typeof ProcessElement, "function")
        done()
    })

});
