'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];
  let primo = 2;
  while (num !== 1) {
    if (num % primo === 0){
      array.push(primo);
      num = num / primo;
    } else {
      primo++
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // [5, 1, 4, 2, 8] toEqual [1, 2, 4, 5, 8]
  
  let swap = true;                                  // declaro swap para poder comprobar
  
  while(swap){                                      // como es true entra
    swap = false;                                   // parto de q no hay swap para evaluar que pasa
    for (let i = 0; i < array.length -1; i++){        
      
      if(array[i] > array[i+1]) {                   // si es true es porque va a haber swap
        swap = true;                                // entonces lo declaro como true de nuevo para volver al for el prox vuelta
        let aux = array[i+1];
        array[i+1] = array[i];
        array[i] = aux;
      }    
    }
  }

return array                                      // cuando el if sea falso vuelve al while, es falso, retorna el array
}
// console.log(bubbleSort([5, 1, 4, 2, 8]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //  [5, 1, 4, 2, 8] toEqual [1, 2, 4, 5, 8]
  //  PASO 1   
  //  [5, 1, 4, 2, 8]
  //      i  
  //   j 
  //  aux = 1 
  //  while true --> 1 = 5 --> [5, 5, 4, 2, 8] --> j se corre uno a la izq (fuera de rango)
  //  array[j + 1] = aux --> 5 = 1 --> [1, 5, 4, 2, 8]                                 
  //  while por j fuera de rango y vuelve al for
  
  //  PASO 2
  //  [1, 5, 4, 2, 8]
  //         i
  //      j
  //  aux = 4
  //  while true --> 4 = 5 [1, 5, 5, 2, 8] --> j se corre uno a la izq (1)
  //  entra otra vez al while
  //  [1, 5, 5, 2, 8]
  //         i
  //   j
  //  while false porque 1 > 4   
  //  array[j + 1] = aux --> 5 = 4 --> [1, 4, 5, 2, 8]                            

  
  for (let i = 1; i < array.length; i++){    // iterno desde el segundo elemento xq el primero no compara con nada 
    let j = i - 1;                           // declaro con qué comparar el i (el anterior)
    let aux = array[i];                      // me guardo el valor de a donde apunta el i  
    
    while (j >=0 && array[j] > aux) {        // mientras haya valores a la izquierda y mientras el valor a dónde apunta el j sea mayor al aux q guardé
      array[j + 1] = array[j];               // le digo que en el valor más adelante del j ponga el aux (es j+1 porque dónde está el j ahora es menor al aux)  
      j--;                                   // corro el j uno más a la izq 
    }
    array[j + 1] = aux;                      
  }
  return array;  
}
console.log(insertionSort([5, 1, 4, 2, 8]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8] toEqual [1, 2, 4, 5, 8]

  for (let i = 0; i < array.length; i++){
    let min = i;
    for (let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
return array
}

// console.log(selectionSort([5, 1, 4, 2, 8]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
