const assert = require("assert")
const Sequelize = require("sequelize")
const makeDBConnection = require('./db.js')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

describe('database connection', () => {
    it('should connect to database', async () => {
        const makeConnection = makeDBConnection({ORM: Sequelize, url: process.env.DB_URI})
        const dbConnection = makeConnection()

        const isConnected = await dbConnection.connect()
        assert.equal(isConnected, true)  
    });
});

