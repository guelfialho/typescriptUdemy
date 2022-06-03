// function logarClasse(construtor: Function) {
// 	console.log(construtor);
// }

// function decoradorVazio(_: Function) {}

// function logarClasseSe(valor: boolean) {
// 	return valor ? logarClasse : decoradorVazio;
// }

// // factory
// function decorator(a: string, b: number) {
// 	return function (_: Function) {
// 		console.log(a + ' ' + b);
// 	};
// }

type Construtor = { new (...args: any[]): {} };

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
@perfilAdmin
class MudancaAdministrativa {
	critico() {
		console.log('Algo crítico foi alterado!');
	}
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
	return class extends construtor {
		constructor(...args: any[]) {
			super(...args);
			if (!usuarioLogado || !usuarioLogado.admin) {
				throw new Error('Sem permissão!');
			}
		}
	};
}
