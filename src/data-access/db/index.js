const Sequelize =  require('sequelize')
const db = require('./db')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const dbConnection = db({ORM: Sequelize, url: process.env.DB_URI})

module.exports = dbConnection()