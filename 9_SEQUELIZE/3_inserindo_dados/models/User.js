const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false  // campo not null, não aceita valor null
    },
    occupation: {
        type: DataTypes.STRING,
        require: true  // pra ele nao ser vazio, não aceita nada que esteja vazio e nem null
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    },
})

module.exports = User