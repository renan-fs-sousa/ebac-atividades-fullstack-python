function Multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

function Saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoMultiplicacao = Multiplicacao(5, 10);
const mostraSaudacao = Saudacao("Renan");

console.log("Resultado da multiplicação: ", resultadoMultiplicacao);
console.log(mostraSaudacao);