class Nodo {
	constructor(n) {
        this._dato = n;
        this._siguiente = null;
        this._anterior = null;
		this._izquierda = null;
		this._derecha = null;
    }
    
	get dato() {
        return this._dato;
    }

	get siguiente() {
        return this._siguiente;
    }

    get anterior() {
        return this._anterior;
    }

    set siguiente(v) {
        this._siguiente = v;
    }

	set anterior(v) {
        this._anterior = v;
    }
}