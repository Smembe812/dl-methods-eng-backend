const assert = require("assert")
const Sequelize = require("sequelize")
const database = require('./db.js')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

describe('database connection', () => {
    it('should connect to database', async (done) => {
        const makeConnection = database({ORM: Sequelize, url: process.env.DB_URI})
        const dbConnection = makeConnection()
        try {
            const isConnected = await dbConnection.isConnect()
            assert.equal(isConnected, true)  
            done()
        } catch (error) {
            done(error)
        }
    });
});

