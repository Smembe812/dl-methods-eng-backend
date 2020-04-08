const assert = require('assert')
const makeFile = require('./model')
const {define, ORM} = require('../db')

describe('File Sequelize Model', () => {
    it('should sync with database', async (done) => {
        try {
            const File = makeFile({define, ORM})
            const sync = await File.sync({force: true})

            assert.equal(1,1)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });
    
    it('should create db model', (done) => {
        const File = makeFile({define, ORM})

        assert.equal(typeof File, "function")
        done()
    })

});
