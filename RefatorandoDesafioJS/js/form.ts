//class contato

class contato {
	constructor(
		private _nome: string,
		private _sobrenome: string,
		private _email: string,
		private _cpf: number,
		private _telefone: number,
		private _contato: string,
		private _tipo: string,
		private _mensagem: string | null
	) {}

	get nome(): string {
		return this._nome;
	}
	get sobrenome(): string {
		return this._sobrenome;
	}
	get email(): string {
		return this._email;
	}
	get cpf(): number {
		return this._cpf;
	}
	get telefone(): number {
		return this._telefone;
	}
	get contato(): string {
		return this._contato;
	}

	get tipo(): string {
		return this._tipo;
	}

	get mensagem(): string | null {
		return this._mensagem;
	}
}

function Post(form: any): void {
	let data = new contato(
		form.elements.namedItem('nome').value,
		form.elements.namedItem('sobrenome').value,
		form.elements.namedItem('email').value,
		form.elements.namedItem('cpf').value,
		form.elements.namedItem('telefone').value,
		form.elements.namedItem('contato').value,
		form.elements.namedItem('tipo').value,
		form.elements.namedItem('mensagem').value
	);

	Enviar(data);
}

function Enviar(data: contato) {
	console.log(data.nome);
	console.log(data.sobrenome);
	console.log(data.email);
	console.log(data.cpf);
	console.log(data.telefone);
	console.log(data.contato);
	console.log(data.tipo);
	console.log(data.mensagem);
	alert(
		'Obrigado sr(a) ' +
			data.nome +
			' ' +
			data.sobrenome +
			' os seus dados foram encaminhados com sucesso'
	);
}
