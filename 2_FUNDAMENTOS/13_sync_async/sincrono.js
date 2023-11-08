const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivo.txt", "Oi");  // criar e escrever no arquivo txt, oi

console.log("Fim");