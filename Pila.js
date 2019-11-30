class Pila{
	constructor(){
		this._ultimo = null;
	}
	get ultimo() {
		return this._ultimo;
	}

	agregar(nuevo){
		if (this._ultimo) {
			nuevo.anterior = this._ultimo;
			this._ultimo = nuevo;
		} else {
			this._ultimo = nuevo;
		}
	}

	sacar() {
		var e = this._ultimo;
		this._ultimo = e.anterior;
		return e;
	}

	imprimir(i = this._ultimo){
		console.log(i.dato);
		if (i.anterior) {
			this.imprimir(i.anterior);
		}
	}
}

class ListaDoble{
	constructor(){
		this._primero = null;
		this._ultimo = null;
		this._pila = new Pila();
	}
	get primero() {
		return this._primero;
	}

	get ultimo() { 
		return this._ultimo;
	}

	get pila() { 
		return this._pila;
	}

	set primero(v) { 
		this._primero = v;
	}

	set ultimo(v) {
		this._ultimo = v;
	}

	agregar(nuevo){
		if (this._primero) {
			nuevo.anterior = this._ultimo;
			this._ultimo.siguiente = nuevo;
			this._ultimo = nuevo;
		} else {
			this._primero = nuevo;
			this._ultimo = nuevo;
		}
	}

	eliminar(nodo){
		if (nodo == this._primero) {
			nodo.siguiente.anterior = null;
			this._primero = nodo.siguiente;
		}else if (nodo == this._ultimo) {
			nodo.anterior.siguiente = null;
			this._ultimo = nodo.anterior;
		}else{
			nodo.anterior.siguiente = nodo.siguiente;
			nodo.siguiente.anterior = nodo.anterior;
		}
	}

	poner(nodo){
		nodo.izquierda = nodo.anterior;
		nodo.derecha = nodo.siguiente;
		this.eliminar(nodo.anterior);
		this.eliminar(nodo.siguiente);
	}

	generarArbol(){
		var este = this._primero;
		while(este){
			if (este.dato == "*" || este.dato == "/") {
				this.poner(este);
			}
			este = este.sig;
		}

		este = this._primero;
		while(este){
			if (este.dato == "+" || este.dato == "-") {
				this.poner(este);
			}
			este = este.siguiente;
		}
		this.preOrder();
	}

	imprimir(i = this._primero){
		console.log(i.dato);
		if (i.siguiente) {
			this.imprimir(i.siguiente);
		}
	}
	
	preOrder(p = this._primero){
		console.log(p.dato);
		this._pila.agregar(new Nodo(p.dato));
		if (p.izquierda) {
			this.preOrder(p.izquierda);
		}
		if (p.derecha) {
			this.preOrder(p.derecha);
		}
	}
}