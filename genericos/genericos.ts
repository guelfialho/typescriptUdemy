function echo(objeto: any) {
	return objeto;
}

console.log(echo('Ana').length);
console.log(echo(27).length);
console.log(echo({ nome: 'Ana', idade: 27 }));

// usando a notação de generics

function echoMelhorado<T>(objeto: T): T {
	return objeto;
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27).length);
console.log(echoMelhorado<number>(18).length);
console.log(echoMelhorado<string>('Miguel').length);

// generics

// const avaliacoes: array = [10, 9.3, 7.7]; // problema
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // problema
console.log(avaliacoes);

function imprimir<T>(args: T[]) {
	args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['1', '2', '3']);
imprimir<{ nome: string; idade: number }>([
	{ nome: 'miguel', idade: 23 },
	{ nome: 'Carla', idade: 24 },
	{ nome: 'Julia', idade: 30 },
]);

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
	// itens: Array<{chave: C; valor: V}>
	itens: Array<Par<C, V>> = new Array<Par<C, V>>();

	obter(chave: C): Par<C, V> | null {
		const resultado = this.itens.filter((i) => i.chave === chave);
		return resultado ? resultado[0] : null;
	}

	colocar(par: Par<C, V>) {
		const encontrado = this.obter(par.chave);
		if (encontrado) {
			encontrado.valor = par.valor;
			console.log(par);
		} else {
			this.itens.push(par);
			console.log(par);
		}
	}

	limpar() {
		this.itens = new Array<Par<C, V>>();
	}

	imprimir() {
		console.log(this.itens);
	}
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });

// console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
