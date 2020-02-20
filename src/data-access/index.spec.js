const assert = require("assert")
const DBConnect = require('index')

describe('database connection', () => {
    it('should pass if connected to database', async () => {
        const db = await DBConnect()
        assert.equal(db, true)
    });
});
