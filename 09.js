function resultado(alunos) {
    let i = 0;

    while (i < alunos.length) {
        const aluno = alunos[i];
        const resultado = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
        console.log(`${aluno.nome}: ${resultado}`);
        i++;
    }
}

const alunos = [
    { nome: 'Jose Neto', nota: 8 },
    { nome: 'Xulinha', nota: 5 },
    { nome: 'Cabeçadeovo', nota: 7 }
];

resultado(alunos); 


// pesquisando um pouco e usando nosso amigo gpt Achei uma forma mais facil usando forEach 
// e decifir pedir ajuda a ele e fazer usando ele e e bem mais rapido pois ele percorre todos os objetos da lista 
// objetos ou itens que e o nosso caso dessa questão
// function resultadoAlunos(alunos) {
//     alunos.forEach(aluno => {
//         const status = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
//         console.log(`${aluno.nome}: ${status}`);
//     });
// } 