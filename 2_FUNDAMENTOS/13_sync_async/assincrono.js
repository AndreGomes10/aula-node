const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) {  // criar e escrever no arquivo txt, oi
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("Fim");