class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // quando for feita a negociação já devolver o objeto congelado sem precisar congelar no html
    }

    get volume() { //função dentro de classe é um módulo
        return this._quantidade * this._valor; // _ convenção que essa propriedade só pode ser alterada pela proriedade da classe, não funcionando alterações de fora
    }

    get data() { // método para retornar 
        return new Date(this._data.getTime()); // programação defensiva para não alterar a data
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}