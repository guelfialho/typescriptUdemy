interface Humano {
	nome: string;
	idade?: number; // opicional
	[prop: string]: any; // propriedade dinamica
	saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
	console.log(`Olá, ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
	pessoa.nome = 'Miguel';
}

const pessoa: Humano = {
	nome: 'Lucas',
	idade: 27,
	saudar(sobrenome: string): void {
		console.log(`Meu nome é ${this.nome} ${sobrenome}`);
	},
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Fialho');
// saudarComOla({ nome: 'Solange', idade: 75, altura: 1.55, teste: 3 });

/// usando classes

class Cliente implements Humano {
	nome: string = '';
	ultimaCompra: Date = new Date();
	saudar(sobrenome: string): void {
		console.log(`Meu nome é ${this.nome} ${sobrenome}`);
	}
}

const meuCliente = new Cliente();

meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

/// interface Função
interface FuncaoCalculo {
	(a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
	return Array(exp)
		.fill(base)
		.reduce((before, after) => before * after);
};

console.log(potencia(2, 3));
