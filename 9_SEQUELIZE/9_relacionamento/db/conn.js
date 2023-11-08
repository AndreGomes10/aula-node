const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', 'mysql', {
    host: "localhost",
    dialect: 'mysql'  // dialetct = qual banco quero integrar
})


// aqui esta só conectando o banco de bados, não esta mantendo a conexao, estamos dando um ping la
/*
try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso com o Sequelize!')
}
catch(err){
    console.log('Não foi possivel conectar: ', error)
}
*/

module.exports = sequelize