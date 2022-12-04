'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  // caso de corte cuando haya 1 o ningun elemento

  if (array.length <= 1) return array // si el array tiene 1 elemento o ninguno lo devuelvo porque está ordenado
  
  let pivot = array[0];
  let left = [];       
  let right = [];
    
  for (let i = 1; i < array.length; i++){
    if(array[i] > pivot) right.push(array[i]);   
    else left.push(array[i]);   
  }

  // pivot = 5 - left = [1,4,2] - right = [8]
  // retorno la recursión del arreglo left + el pivot + recursión del arreglo right
  return quickSort(left).concat(pivot).concat(quickSort(right));

}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if (array.length === 1) return array

  let mitad = Math.floor(array.length / 2); // con el metodo math me aseguro que quede redondo (porque un impar div 2 quedaría con coma)
  let left = array.slice(0,mitad)           // el slice no incluye la mitad, va de cero hasta uno antes a mitad
  let right = array.slice(mitad)            // si pongo mitad considera q es de la mitad incluida en adelante

  return merge(mergeSort(left), mergeSort(right));

}


function merge (left, right) {

  let i = 0; //left
  let j = 0; // right
  let arr = [];

  while (i < left.length && j < right.length){

    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++
    }
  }
  return arr.concat(left.slice(i)).concat(right.slice(j)); //me agrega lo que haya quedado fuera de rango
}

// [5, 1, 4, 2, 8]
// mid = 2
// left = [5,1]
// right = [4,2,8]
// merge(mergeSort([5,1]), mergeSort([4,2,8]) // merge([1,5], mergeSort([4,2,8])

//mergeSort([5,1]) // [1,5]
// mid = 1
// left = [5]
// right = [1]
// merge(mergeSort([5]), mergeSort([1])); --> merge([5]), [1]) --> [1,5]






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
