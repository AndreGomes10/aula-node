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

exports.default = sequelize


/*c
onst { Sequelize } = require('sequelize')
                        // nome do banco, usuario, senha
const sequelize = new Sequelize('nodemvc', 'root', 'mysql', {
    host: "localhost",
    dialect:  "mysql",
})

try{
    sequelize.authenticate()
    console.log('Conectamos ao MYSQL!');

} catch(error){
    console.log(`Não foi possível conectar: ${error}`);
}

exports.default = sequelize
*/