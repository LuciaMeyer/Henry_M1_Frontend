'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {
  this.left = null
  this.right = null
  this.value = value
};


BinarySearchTree.prototype.insert = function(value){            // empiezo con un root tree value 20 según test

  if (value > this.value) {                                      // si value a insertar es mayor al root, voy a la rama derecha
     
    if (!this.right) this.right = new BinarySearchTree(value);  // si no hay nada a la derecha, inserto el value creando un nuevo árbol [CASO DE CORTE]                              
    else this.right.insert(value);                              // si hay algo a la derecha uso recursión y vuelvo a preguntar si el valor es igual a este nuevo root (subárbol)            
                                                                
  } else {                                                      // si value a insertar no es mayor al root, voy a la rama izquierda       
    
    if (!this.left) this.left = new BinarySearchTree(value)      // misma operación para el otro lado
    else this.left.insert(value);
  } 

};



BinarySearchTree.prototype.size = function(){
  
if (!this.right && !this.left) return 1;         // no tiene hijos [CASO DE CORTE]
if (!this.right) return 1 + this.left.size();    // solo con hijo a la izquierda
if (!this.left) return 1 + this.right.size();    // solo con hijo a la derecha 
return 1 + this.right.size() + this.left.size(); // si no son los casos anteriores entonces tiene 2 hijos

};


BinarySearchTree.prototype.contains = function(value){

  if (value === this.value) return true;        // si el value es el root lo encontré, retorno true [CASO DE CORTE]

  if (value > this.value) {                     // si value no es el root y es mayor a él, busco en la rama derecha

    if(!this.right) return false;               // si no hay nada en la rama derecha el value no se encuentra, retorno false [CASO DE CORTE]
    return this.right.contains(value);          // si hay un elemento en la rama derecha uso recursión para preguntar si value es este nuevo root
     
  } else {                                      // si value no es mayor al root, busco en la rama izquierda y repito la operación    
    
    if(!this.left) return false;
    return this.left.contains(value);
  }                                              
                               
};



BinarySearchTree.prototype.depthFirstForEach = function (cb, order){ // en base al arbol de ejemplo tengo que recorrerlo con DFS in order y por cada nodo ejecutar la función cb para pushear al array que voy a retornar 
  
  // in order [ 0, 1, 5, 11, 12...
  if (order === 'in-order'  || order === undefined){
    
    if(this.left) this.left.depthFirstForEach(cb, order);      // si existe elemento a la derecha, vuelvo a ejecutra DFS en ese nuevo nodo (voy bajando)                           
    cb(this.value);                                            // si no existe elemento a la derecha necesito pushear ese valor, por eso ejecuto la función con this.value
    if(this.right) this.right.depthFirstForEach(cb, order);    // no necesito volver a invocar porque el usar recursión va a llegar a preguntarle otra vez "si no tiene hijo izquierdo pushea"
  }

  // pre order [20, 15, 5, 0, 1...
  if (order === 'pre-order'){
    
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
  }

  // post order [ 1, 0, 11, 12, 13...
  if (order === 'post-order'){

    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);

  }                                                  
 
};



BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = [] ) {
  
  cb(this.value); 

  if(this.left) array.push(this.left);                
  if(this.right) array.push(this.right);                

  let next = array.shift();                            
  if(next) next.breadthFirstForEach(cb, array);       
  
};

// PASO 1                               PASO 2                              PASO 3                                  PASO 4
// BFS [20]                             [20,15]                             [20,15,25]                              [20,15,25,5]
// array [15,25] -> [25] (saco el 15)   [25,5,17]- > [5,17] (saco el 25)    [5,17,21,28] ->[17,21,28] (saco el 5)   [17,21,28,0,14] -> [21,28,0,14] (saco el 17)




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};