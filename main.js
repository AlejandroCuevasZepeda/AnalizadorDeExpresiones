var a = "5+3/8*2-10/3";
var lista = new ListaDoble();

for (var i = 0; i < a.length; i++) {
	lista.agregar(new Nodo(a.charAt(i)));
}

lista.generarArbol();