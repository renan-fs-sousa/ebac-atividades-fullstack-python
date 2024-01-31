const alunos = [
    { nome: "Renan", nota: 10 },
    { nome: "Maria", nota: 3 },
    { nome: "Lucas", nota: 6 },
    { nome: "Lucia", nota: 8 },
    { nome: "Marcos", nota: 2 }
];

function filtrarAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);

console.log(alunosAprovados);