const assert = require('assert')
const makeTechnique = require('./model')
const {define, ORM} = require('../db')

describe('Technique Sequelize Model', () => {
    it('should sync with database', async (done) => {
        try {
            const Technique = makeTechnique({define, ORM})
            const sync = await Technique.sync({force: true})

            assert.equal(1,1)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });
    
    it('should create db model', (done) => {
        const Technique = makeTechnique({define, ORM})

        assert.equal(typeof Technique, "function")
        done()
    })

});
