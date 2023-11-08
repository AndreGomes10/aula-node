const { DataTypes}  = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        require: true,
    },
    number: {
        type: DataTypes.STRING,
        require: true,
    },
    city: {
        type: DataTypes.STRING,
        require: true,
    },
})

// criar relacionamento
Address.belongsTo(User)  // dizendo que um endereço pertence a um usuario




module.exports = Address