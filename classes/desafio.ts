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
	velocidade: number;
	constructor(public nome: string, velocidade: number) {
		this.velocidade = velocidade;
	}

	buzinar(): void {
		return console.log('Toooooooooot!');
	}

	acelerar(delta: number): number {
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
abstract class Objeto2D {
	constructor(public base: number = 0, public altura: number = 0) {}

	abstract area(): number;
}

class Retangulo extends Objeto2D {
	area(): number {
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
	private _primeiroNome: string = '';

	get primeiroNome(): string {
		return this._primeiroNome;
	}

	set primeiroNome(valor: string) {
		this._primeiroNome = valor.length >= 3 ? valor : '';
	}
}
const estagiario = new Estagiario();

console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
