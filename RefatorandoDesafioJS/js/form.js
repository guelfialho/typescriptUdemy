"use strict";
//class contato
class contato {
    _nome;
    _sobrenome;
    _email;
    _cpf;
    _telefone;
    _contato;
    _tipo;
    _mensagem;
    constructor(_nome, _sobrenome, _email, _cpf, _telefone, _contato, _tipo, _mensagem) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._email = _email;
        this._cpf = _cpf;
        this._telefone = _telefone;
        this._contato = _contato;
        this._tipo = _tipo;
        this._mensagem = _mensagem;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get email() {
        return this._email;
    }
    get cpf() {
        return this._cpf;
    }
    get telefone() {
        return this._telefone;
    }
    get contato() {
        return this._contato;
    }
    get tipo() {
        return this._tipo;
    }
    get mensagem() {
        return this._mensagem;
    }
}
function Post(form) {
    let data = new contato(form.elements.namedItem('nome').value, form.elements.namedItem('sobrenome').value, form.elements.namedItem('email').value, form.elements.namedItem('cpf').value, form.elements.namedItem('telefone').value, form.elements.namedItem('contato').value, form.elements.namedItem('tipo').value, form.elements.namedItem('mensagem').value);
    Enviar(data);
}
function Enviar(data) {
    console.log(data.nome);
    console.log(data.sobrenome);
    console.log(data.email);
    console.log(data.cpf);
    console.log(data.telefone);
    console.log(data.contato);
    console.log(data.tipo);
    console.log(data.mensagem);
    alert('Obrigado sr(a) ' +
        data.nome +
        ' ' +
        data.sobrenome +
        ' os seus dados foram encaminhados com sucesso');
}
