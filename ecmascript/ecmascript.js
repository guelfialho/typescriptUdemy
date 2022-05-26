'use strict';
// desafio 1
// var dobro = function(valor) {
//     return valor * 2
//     }
//     console.log(dobro(10))
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//desafio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
//     }
//     dizerOla()
//     dizerOla("Anna")
const dizerOla = (nome) => console.log(`Olá ${nome === undefined ? 'Pessoa' : nome}`);
dizerOla(undefined);
dizerOla('Anna');
// desafio 3
// var nums = [-3, 33, 38, 5]
// console.log('???')
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// desafio 4
// var nums = [-3, 33, 38, 5]
// var array = [55, 20]
// console.log(array)
const array = [55, 20, ...nums];
console.log(array);
// desafio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)
const notas = [8.5, 6.3, 9.4];
console.log(...notas);
const cientista = {
    primeiroNome: 'Will',
    experiencia: 12,
};
const { primeiroNome: n, experiencia: ex } = cientista;
console.log(n);
console.log(ex);
