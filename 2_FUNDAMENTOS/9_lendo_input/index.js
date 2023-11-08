const readline = require('readline').createInterface({
    input: process.stdin,  // entrada de dados
    output: process.stdout,  // saida de dados
})

readline.question("Qual a sua linguagem preferida?", (language) => {  // language vai reseber um argumento só
    if(language === "Python"){
        console.log('Isso nem é linguagem');
    }else{
        console.log(`A minha linguagem preferida é: ${language}`);
    }

    readline.close()  // p parar a execução
})