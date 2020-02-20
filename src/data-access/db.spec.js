const assert = require("assert")
const Sequelize = require("sequelize")
const makeDBConnection = require('./db.js')

describe('database connection', () => {
    it('should connect to database', async () => {
        const dbConnection = makeDBConnection({orm: Sequelize, url: `postgres://postgres:postgres@localhost:5432/dl_method_eng`})

            const isConnected = await dbConnection.connect()
            assert.equal(isConnected, true)
            
    });
});

