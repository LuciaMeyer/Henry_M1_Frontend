
x = 1;                        
var a = 5;                    
var b = 10;                   
var c = function(a, b, c) {                                            
 var x = 10;                 
  console.log(x);              // 1° valor > 10
  console.log(a);              // 2° valor > 8
  var f = function(a, b, c) {  // a: 8 - b: 9 - c: 10
    b = a; // b = /
    console.log(b);            // 3° valor > 8
    b = c; // b = 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);             // 4° valor > 9
}
c(8,9,10);                    
console.log(b);               // 5° valor > 10
console.log(x);               // 6° valor > 1

// el intérprete hace una lectura y recién empieza a ejecutar en la línea 18 dónde asigna los valores en c()
// pasados por parametros (como si fuesen variables dentro de la función)
// después sigue con la ejecución en la línea 7, línea 8, despúés se va a la líena 15 donde pasa los parámetros
// como variables dentro de f. Ejecuta la línea 11, 19 y 20



console.log(bar); // 1
console.log(baz); // error porque baz no está en memoria, no fué definida y no sigue leyendo
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;



var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco 
// var es la misma ya que la segunda está dentro de un bloque de código, no de una función
// no se crea un nuevo contexto. Para let sí se crea un nuevo contexto dentro de un bloque 



var instructor = "Tony";     
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony 

// A diferencia del anterior var no es la misma ya que está adentro de una función, cambia el contexto 



var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm);         // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco


6 / "3"        // 2
"2" * "3"      // 6
4 + 5 + "px"   // 9px
"$" + 4 + 5    // $45
"4" - 2        // 2
"4px" - 2      // NaN
7 / 0          // Infinity -> es un valor matemático
{}[0]          // undefined -> no encuentra esa propiedad en el objeto. 
parseInt("09") // 9
5 && 2         // 2
2 && 5         // 5
5 || 0         // 5
0 || 5         // 5
[3]+[3]-[10]   // 23   
3>2>1          // false   
[] == ![]      // true


function test() {
  console.log(a);     // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
     return 2;
  }
}
test();  

// Reconoce la variable pero no el valor, no ocupa espacio en memoria. Por eso undefined. 
// La función si ocupa espacio en memoria y se puede ejecutar antes de ser definida


var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}
getFood(false); // undefined

// no entra al if porque la condición en falsa. 
// retorna undenided porque: Como el hoisting sube las variables al ppio de las funciones
// y el if es un statment, entones la var snack existe en la función pero no está definifa  
// quedaría así:
// function getFood(food) {
//   var snack;
//   if (food) {
//     snack = 'Friskies';
//     return snack;
// }


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa
// el this apunta al objeto prop

var test = obj.prop.getFullname;
//me guardo la funcion como un elemento suelto

console.log(test()); // Juan Perez
//cuando invoco la función ya no esta ligada al objeto prop 
//sino que refiere al objeto global



function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1 - 4 - 3 - 2
//primero hace los console.log y después los setTimeout que son funciones asíncronas (aunque el time sea 0)

