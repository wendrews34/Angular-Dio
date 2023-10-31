//Desafio
//Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. 
//Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles 
//foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos 
//de 2, 3, 4 e 5?

//Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e 
//acaba errando alguns cálculos.

//Ajude Cérebro a resolver o desadio de Pink.

//Entrada
//A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade 
//de números na lista de Pink.

//A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

//Saída
//Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação 
//da saída nos exemplos, pois ela deve ser seguida rigorosamente.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: Retorne a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista
const N = parseInt(gets());
const lista = gets().split(" ").map(Number);

const multiplosDe = [2, 3, 4, 5];

for (let i = 0; i < multiplosDe.length; i++) {
    const multiplo = multiplosDe[i];
    let quantidade = 0;

    lista.forEach(numero => {
        if (numero % multiplo === 0) {
            quantidade++;
        }
    });

    print(`${quantidade} Multiplo(s) de ${multiplo}`);
}