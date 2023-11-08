const inquirer = require('inquirer')

inquirer
  .prompt([  // prompt = ele é responsavel por fazer as perguntas, pode usar um array
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    }
])
.then((answers) => {  //  then = vamos pergar a answers(resposta) e vai executar alguma coisa aqui dentro
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2  // estamos acessando as propriedades do answers

    console.log(`A média do aluno é ${media}`)
  })
  .catch((err) => { // cath = é pra imprimir um erro na tela
    console.log(err)
  })


/*
  precisa instalar:
  npm init
  npm insatall inquirer se der erro usar npm npm install inquirer@8.1.2
*/