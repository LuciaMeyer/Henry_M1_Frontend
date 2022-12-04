'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
};

function Node(value){
  this.value = value;
  this.next = null;
};

LinkedList.prototype.add = function (value){

  let node = new Node(value);
  let current = this.head;
  if(!current) return this.head = node; //es lo mismo poner if (!this.head) o if(this.head === null)
  while(current.next) current = current.next; 
  current.next = node;
  return node;
};

LinkedList.prototype.remove = function (){

  let current = this.head;  
  if(!current) return null;     // si no tengo lista devolver null
  if (!current.next) {          // si la lista solo tiene 1 valor
    let aux = current.value;    // guardo el valor en una variable
    this.head = null;           // elimino el nodo
    return aux                  // retorno el valor que gaurdé
  }
  while(current.next.next) {    // mientras 2 valores adelantes no sean null
    current = current.next;     // avanzo
  }
  let aux = current.next.value; // cuando llego al final guardo el valor
  current.next = null;          // elimino el último
  return aux;                   // retorno el valor q guardé
};


LinkedList.prototype.search = function (data){

  let current = this.head;
  while (current){                                       // mientras existan nodos 
    if (typeof data === 'function'){                     // si el argumento es una función es true, entra   
      if(data(current.value)) return current.value;      // y si la func es la q retorna el valor del nodo, q lo retorne
    } else {                                             // sino 
      if (current.value === data) return data            // si el valor del nodo es el argumento, retornalo
    }
    current = current.next;                              // dentro del while voy iterando
  }
  return null;                                           // si no lo encuentro a data retornar null 
};



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {


  

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};

