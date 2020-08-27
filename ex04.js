const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de ingressos comprados do tipo 'Normal': ", normal => {
    rl.question("Digite a quantidade de ingressos comprados do tipo 'Estudante': ", estudante => {
        rl.question("Digite a quantidade de ingressos comprados do tipo 'Acessíve': ", acc => {
            console.log(`Foram comprados ${parseInt(normal) + parseInt(estudante) + parseInt(acc)} ingressos no total e foram arrecadados R$ ${100*parseInt(normal) + 50*parseInt(estudante) + 30*parseInt(acc)}.`);
            rl.close();
        });
    });
});