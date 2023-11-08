// npm link lodash
const _ = require('lodash')

const arr = [1, 2, 2, 3, 3, 4, 4, 5]

console.log(_.sortedUniq(arr))  // sortedUniq = vai deixar só os elementos unicos e não vai repetir



/* npm install -g lodash
   no caso do ladash mesmo sendo global tem que executar um comando no terminal: 
   npm link lodash


   testar o npm
   npx cowsay "Hello World!"
   npx cowsay -d "kkkkk"
*/