const chalk = require('chalk')

const nota = 7

if(nota >= 7){
    console.log(chalk.green.bold('Parabens! Você está aprovado'));
}else{
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação'));
}


/* instalar: npm init
   Instalar: npm install chalk se não funcionar instalar o pacote diretamente na versão 4.1.2 com 
   npm install chalk@4.1.2
*/