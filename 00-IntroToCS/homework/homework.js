'use strict'

function BinarioADecimal(num) {           
// '1001' --> (1 * 2 ^ 3) + (0 * 2 ^ 2) + (0 * 2 ^) + (1 * 2 ^ 0)
//  i = 0 --> num [0] --> '1' * 2 ** (lenght -1 -i--> 3 - 0) = 3
//  i = 1 --> num [1] --> '0' * 2 ** (lenght -1 -i--> 3 - 1) = 2
//  i = 2 --> num [2] --> '0' * 2 ** (lenght -1 -i--> 3 - 2) = 1
//  i = 3 --> num [3] --> '1' * 2 ** (lenght -1 -i--> 3 - 3) = 0

  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
      decimal = decimal + num[i] * 2 ** (num.length -1 -i);    
  }
  return decimal;
}

function DecimalABinario(num) {         //  7 recibo un decimal
  
  let binario = '';                     //  '111' retorno una string
  while (num > 0 ) {                    //  7 mayor a cero
    binario = (num % 2 ) + binario;     //  7 % 2 > 1 concateno el 1 en string q es el resultado de num resto base
    num = Math.floor(num / 2);          //  7 / 2 > 3,5 > 3 redondeo el resultado de num dividido entre 2
  }
  return binario;                       //  '100'
 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}