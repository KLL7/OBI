//não estou utilizando a biblioteca scanf-printf-obi

const util = require('util');

function printf(format, ...args) {
    const res = util.format(format, ...args);
    console.log(res);
}

var n, f1, f2, f3, f0;

n = 5;

if (n > 100 || n < 2) {
    printf("Número não pode ser maior que 100 ou menor que 2\n");
} else {
    f3 = 8;
    f2 = (n - 2) * 12;
    f0 = (n - 2) ** 3;
    f1 = (n ** 3) - (f2 + f3 + f0);

    printf("Nenhum lado %d\n", f0);

    printf("Um lado %d\n", f1);

    printf("Dois lados %d\n", f2);

    printf("Três lados %d\n", f3);

    printf("Total de lados %d\n", n ** 3);
}