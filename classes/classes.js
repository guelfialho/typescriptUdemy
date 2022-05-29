"use strict";
// class Data {
// 	// publico por padrão
// 	dia: number;
// 	public mes: number;
// 	ano: number;
// 	constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
// 		this.dia = dia;
// 		this.mes = mes;
// 		this.ano = dia;
// 	}
// }
// const aniversario = new Data(3, 11, 1991);
// console.log(aniversario);
// const casamento = new Data();
// casamento.ano = 2017;
// console.log(casamento);
// ////// fazendo de outra forma:
// class Data2 {
// 	constructor(
// 		public dia: number = 1,
// 		public mes: number = 1,
// 		public ano: number = 1970
// 	) {}
// }
// const aniversarioEsperto = new Data2(3, 11, 1991);
// console.log(aniversarioEsperto);
// const casamentoEsperto = new Data2();
// casamentoEsperto.ano = 2017;
// console.log(casamentoEsperto);
/////
/////
/////
class Produto {
    nome;
    preco;
    desconto;
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} (${(this.desconto * 100).toFixed(2)}% off)`;
    }
    precoComDesconto() {
        this.preco = this.preco * (1 - this.desconto);
        return this;
    }
}
const prod1 = new Produto('Airpods', 1000, 0.1);
const prod2 = new Produto('Airpods Pro', 1500);
console.log(prod1.precoComDesconto().resumo());
/////
/////
/////
class Carro {
    marca;
    modelo;
    velocidadeMaxima;
    velocidadeAtual = 0;
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
// console.log(carro1.velocidadeMaxima)
// getters and setters
class Pessoa {
    _idade = 0;
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
    get idade() {
        return this._idade;
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
