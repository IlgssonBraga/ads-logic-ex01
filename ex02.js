const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de litros abastecidos com gasolina: ", gasolina => {
    rl.question("Digite a quantidade de litros abastecidos com etanol: ", etanol => {
        rl.question("Digite a quantidade de litros abastecidos com GNV: ", gnv => {
            console.log(`Foram abastecidos ${parseInt(gasolina) + parseInt(etanol) + parseInt(gnv)} litros.`);
            rl.close();
        });
    });
});