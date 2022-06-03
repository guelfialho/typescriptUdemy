"use strict";
// function logarClasse(construtor: Function) {
// 	console.log(construtor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function logarObjeto(construtor: Construtor) {
// 	console.log('Carregando...');
// 	return class extends construtor {
// 		constructor(...args: any[]) {
// 			console.log('Antes..');
// 			super(...args);
// 			console.log('depois..');
// 		}
// 	};
// }
// interface Eletrodomestico {
//     imprimir?(): void
// }
// // @logarClasse
// // @logarClasseSe(true)
// // @decorator('teste', 123)
// // @logarObjeto
// @imprimivel
// class Eletrodomestico {
// 	constructor() {
// 		console.log('novo...');
// 	}
// }
// function imprimivel(construtor: Function) {
// 	construtor.prototype.imprimir = Function(){
//         console.log(this)
//     }
// }
// const eletro = new Eletrodomestico()
// eletro.imprimir && eletro.imprimir()
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
