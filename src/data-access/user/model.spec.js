const assert = require('assert')
const makeUser = require('./model')
const {define, ORM} = require('../db')

describe('User Sequelize Model', () => {
    it('should sync with database', async (done) => {
        try {
            const User = makeUser({define, ORM})
            const sync = await User.sync({force: true})

            assert.equal(1,1)
            done()
        } catch (error) {
            assert.equal(1,2)
            done(error)
        }
    });
    
    it('should create db model', (done) => {
        const User = makeUser({define, ORM})

        assert.equal(typeof User, "function")
        done()
    })

});
