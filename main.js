"use strict";
function Multiplicacao(num1, num2) {
    return num1 * num2;
}
function Saudacao(nome) {
    return `Olá ${nome}`;
}
const resultadoMultiplicacao = Multiplicacao(5, 10);
const mostraSaudacao = Saudacao("Renan");
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log(mostraSaudacao);
