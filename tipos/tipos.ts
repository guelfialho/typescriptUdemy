// string

let nome = 'João';
console.log(nome);
// nome = 28; não posso atribuir tipo diferente da inicialização

//Numbers

let idade = 27;
// idade = 'Ana'
console.log();

const movimentacoes = [22, 365, 854, -65];
// movimentacoes[0] = 'Movimentacoes';

const endereco: [string, number, string] = [
	'Rua das Sete Casas',
	6,
	'loteamento pedra do sal',
];

console.log(endereco);

// enums

enum Cor {
	cinza, // 0
	verde, // 1
	azul, // 2
	amarelo = 100, // 100
	preto, // 101
}

let minhaCor: Cor = Cor.verde;
console.log(minhaCor);
console.log(Cor.preto);
console.log(Cor.amarelo);
console.log(Cor.azul);

console.log(Cor[2]);

// Any

let carro: any = 'BMW';
console.log(carro);

carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// tipos em funções (parâmetros e retorno)

function retornaMeuNome() {
	return nome;
}

function retornaMeuNomeString(): string {
	return nome;
}

function digaOi(): void {
	console.log('Oi');
	// return nome ( o tipo void significa que a função não tem retorno)
}

function multiplicar(numA: number, numB: number): number {
	return numA * numB;
}

console.log(multiplicar(2, 3));
// console.log(multiplicar(2,'miguel')) não funciona

// let funcionario: { supervisores: string[] } = {
// 	supervisores: ['Miguel', 'Solange', 'Rodrigo'],
// };

let funcionario: {
	supervisores: string[];
	baterPonto: (horas: number) => string;
} = {
	supervisores: ['Miguel', 'Beatriz'],
	baterPonto(horario: number): string {
		if (horario <= 8) {
			return 'Ponto normal';
		} else {
			return 'Fora do horário!';
		}
	},
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// ALIAS, DEFINIR UM PADRÃO DE TIPO

type Funcionario = {
	supervisores: string[];
	baterPonto: (horas: number) => string;
};

let funcionario2: Funcionario = {
	supervisores: ['Bruna', 'Ana'],
	baterPonto(horario: number): string {
		if (horario <= 8) {
			return 'Ponto normal';
		} else {
			return 'Fora do horário!';
		}
	},
};

let funcionario3: Funcionario = {
	supervisores: ['Kadu', 'Nando'],
	baterPonto(horario: number): string {
		if (horario <= 8) {
			return 'Ponto normal';
		} else {
			return 'Fora do horário!';
		}
	},
};
console.log(funcionario2);
console.log(funcionario3);

// union types

let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// nota = true
// console.log(`Minha nota é ${nota}!`); não aceita outro tipo senão os que foram definidos com o union type.

// never

function falha(msg: string): never {
	throw new Error(msg);
}

const produto = {
	nome: ' a ', // para testar remover o 'a'
	preco: 1,
	validarProduto() {
		if (!this.nome || this.nome.trim().length == 0) {
			falha('Precisa ter nome');
		}

		if (this.preco <= 0) {
			falha('Preco inválido');
		}
	},
};

produto.validarProduto();

//// desafio 2

type Contas = {
	saldo: number;
	depositar: (valor: number) => void;
};

type Correntista = {
	nome: string;
	contaBancaria: Contas;
	contatos: string[];
};

let contaBancaria: Contas = {
	saldo: 3456,
	depositar(valor) {
		this.saldo += valor;
	},
};

const correntista: Correntista = {
	nome: 'Miguel Fialho',
	contaBancaria: contaBancaria,
	contatos: ['34567890', '98765432'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
