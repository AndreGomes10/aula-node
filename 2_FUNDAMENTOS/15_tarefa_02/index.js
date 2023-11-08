const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    {name: 'nome', message: 'Qual o seu nome'},
    {name: 'idade', message: 'Qual a sua idade'},
])
.then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error("O nome e a idade são obrigatórios!")
    }
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response));
})
.catch((err) => console.log(err))


/*
    precisa fazer as configurações:
    npm init
    npm insatall inquirer se der erro usar npm install inquirer@8.1.2
    npm insatall chalk se der erro usar npm install chalk@4.1.2
*/