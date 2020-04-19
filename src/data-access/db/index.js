const { Sequelize, DataTypes, Model, QueryTypes } =  require('sequelize')
const db = require('./db')

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const dbConnection = db({ORM: Sequelize, url: process.env.DATABASE_URL})

const {
    isConnect,
    define,
    ORM,
    instance
} =  dbConnection()

module.exports = {
    Model, 
    isConnect,
    define,
    ORM,
    instance, 
    DataTypes,
    QueryTypes
}