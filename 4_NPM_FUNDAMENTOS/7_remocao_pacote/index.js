const _ = require('lodash')  // lodash o simbolo principal é o underline _

const chalk = require('chalk');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

/* verificar a diferença entre dois arrays */
const diff = _.difference(a, b);  // difference é o metodo da função do lodash, ele vai verificar a diferença entre dois arrays

console.log(chalk.red.bold(diff));


/* essa aula foi inserido um codigo no arquivo package.json em scripts 
   para roda o programa sem digitar o nome do arquivo, digitar no terminal rpm run start
   "start": "node index.js"*/

/* 
    Instalar o lodash
    npm install lodash

    npm install --save-dev chalk  // exemplo: como que se o chalk fosse uma dependencia do desenvolvimento
    se chalk não funcionar instalar o pacote diretamente na versão 4.1.2 com 
    npm install chalk@4.1.2

    Desinstalar o lodash
    npm uninstall lodash
 */