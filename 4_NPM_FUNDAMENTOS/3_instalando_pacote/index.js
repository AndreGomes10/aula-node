const _ = require('lodash')  // lodash o simbolo principal é o underline _

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

/* verificar a diferença entre dois arrays */
const diff = _.difference(a, b);  // difference é o metodo da função do lodash, ele vai verificar a diferença entre dois arrays

console.log(diff);


/* 
    Instalar o lodash
    npm install lodash
 */