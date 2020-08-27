const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de litros abastecidos com gasolina: ", gasolina => {
    rl.question("Digite a quantidade de litros abastecidos com etanol: ", etanol => {
        rl.question("Digite a quantidade de litros abastecidos com GNV: ", gnv => {
            console.log(`Valor total: R$ ${4.199*parseInt(gasolina) + 3.009*parseInt(etanol) + 1.259*(parseInt(gnv)/1000)}`);
            rl.close();
        });
    });
});