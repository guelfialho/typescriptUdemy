"use strict";
// // Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
// // Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
// // Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
////////////////// desafio 1
class Moto {
    nome;
    velocidade;
    constructor(nome, velocidade) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        return console.log('Toooooooooot!');
    }
    acelerar(delta) {
        return (this.velocidade = this.velocidade + delta);
    }
}
const moto = new Moto('Ducati', 120);
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
////////////////////////////////////////////////////////////////////////////////////////////////
////////////// desafio 2
// Exercício 2 - Herança
class Objeto2D {
    base;
    altura;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 10;
console.log(retangulo.area());
//////////////////////////////////////////////////////
////////////// desafio 3
// // Exercício 3 - Getters & Setters
class Estagiario {
    _primeiroNome = '';
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        this._primeiroNome = valor.length >= 3 ? valor : '';
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
