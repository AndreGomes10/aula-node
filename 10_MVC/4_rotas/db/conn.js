const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'mysql', {
    host: "localhost",
    dialect: 'mysql'  // dialetct = qual banco quero integrar
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize