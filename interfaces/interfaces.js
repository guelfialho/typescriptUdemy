"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Miguel';
}
const pessoa = {
    nome: 'Lucas',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Fialho');
// saudarComOla({ nome: 'Solange', idade: 75, altura: 1.55, teste: 3 });
/// usando classes
class Cliente {
    nome = '';
    ultimaCompra = new Date();
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp)
        .fill(base)
        .reduce((before, after) => before * after);
};
console.log(potencia(2, 3));
