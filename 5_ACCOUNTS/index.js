// modulos externos
const inquirer = require("inquirer")
const chalk = require("chalk")

// modulos internos
const fs = require("fs")

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        },
    ])
    .then((answer) => {  // then = seria a solução de algumas opções que o usuario escolhe
        const action = answer['action']

        if(action === 'Criar Conta'){
            createAccount()
        } else if(action === 'Depositar'){
            deposit()
        }
        else if(action === 'Consultar Saldo'){
            getaccountBalance()
        }
        else if(action === 'Sacar'){
            withDraw()
        }
        else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Account!'));
            process.exit()  // ele encerra o programa, encerrar a execução do sistemao.
        }
    })
    .catch((err) => console.log(err))
}

// create an account
function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta:',
        }
    ])
    .then((answer) => {
        const accountName = answer['accountName'];
        console.info(accountName);

        // Criar banco de dados pra registrar as contas
        if(!fs.existsSync('accounts')){  //  verificar se o diretorio existe, se não tiver ele vai ser criado
            fs.mkdirSync('accounts')  // criar diretorio
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){  // verificar se a conta existe e não deixar 
                                                            // o usuario proceguir
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))

            buildAccount()  // chamar a criação da conta novamente
            return  // se tiver um erro aqui, ele da um return pra encerrar as ações 
                    // e depois chamar o biuldAccount de novo
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',  // determinando um conteudo p .json
            function(err){  // se der erro
                console.log(err)
            }
        )

        console.log(chalk.green('Parabéns, sua conta foi criada!'));
        operation()
    })
    .catch((err) => console.log(err))
}

// add an amount to user account = deposito
function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        },
    ])
    .then((answer) => {
        const accountName = answer['accountName']

        // verify if account exists
        if(!checkAccount(accountName)){  // se a resposta for false
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja depositar'
            },
        ])
        .then((answer) => {
            const amount = answer['amount']

            // add an amount
            addamount(accountName, amount)
            operation()
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

// check account = chegar se a conta existe
function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
    return false
  }
  return true
}


// add amount = adicionar valores a conta
function addamount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){  // não tiver nenhum amount, o usuario pode dar um enter la e dar erro
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

                // amount = valor que foi digitado     accountData = valor que já tem na conta
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    // salvar no arquivo
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),  // converter o json em texto
        function(err){  // exibir um posivel erro
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`));
}

// ler arquivo
function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {  // lendo o arquivo
        encoding: 'utf8',
        flag: 'r'  // r = de leitura, só quero ler o arquivo
    })
    return JSON.parse(accountJson)  // transformando em json de novo
}

// show account balance = consultar saldo
function getaccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer) => {
        const accountName = answer['accountName']

        // verify if account exists
        if(!checkAccount(accountName)){
            return getaccountBalance()
        }

        const accountData = getAccount(accountName)  // aqui a conta existe
        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`))

        operation()
    })
    .catch(err => console.log(err))
}

// with draw = sacar
function withDraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer) => {
        const accountName = answer['accountName'];
        if(!checkAccount(accountName)){
            return withDraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
        ])
        .then((answer) => {
            const amount = answer['amount']

            removeAmount(accountName, amount)
            
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

// remove account = remover valor/saldo
function removeAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponível'))
        return withDraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)  // balance é a variavel do .json

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))

    operation()
}



/*
    Instalar:
    npm install inquire ou npm install inquirer@8.1.2
    npm install chalk@4.1.2

    Essa aula foi inserido um codigo no arquivo package.json em scripts 
    para roda o programa sem digitar o nome do arquivo, digitar no terminal rpm run start
   "start": "node index.js"
*/