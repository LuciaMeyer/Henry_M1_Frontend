const layout = [
  [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
  [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
  [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];
// console.log(layout[0][1].booked) 
// console.log(layout[1][0].booked) 


function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;

};
// console.log(getRowNumber('A'))


function getSeat (letter, number){  // retorno el objeto

return layout[getRowNumber(letter)][number]
};
// console.log(getSeat('B',0))


function checkSeatStatus(row, column) { // A

  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  if(typeof column !== 'number') throw new TypeError('Second parameter is not a number');
  if(row.length !== 1) throw new TypeError ('first parameter must be only a letter');
  if(getRowNumber(row) > 4) throw new TypeError ('the range of letters is not accepted');
  
  let seat = getSeat(row, column);
  return seat.booked
};
// console.log(checkSeatStatus(0, 2));
// console.log(checkSeatStatus('A', '2'));
// console.log(checkSeatStatus('AA', 2));
// console.log(checkSeatStatus('O', 2));
// console.log(checkSeatStatus('B', 0));


function book(row, column){ 
  
  if(checkSeatStatus(row, column)) return 'Seat in ' + row + column + ' is already booked';
   
  getSeat(row, column).booked = true

  return 'Seat in ' + row + column + ' successfully booked';
  
};
// console.log(book('B', 0))
// console.log(book('D', 0))
// console.log(book('B', 0))


function partialState (){

  let status = {
    totalSeat: 0,
    bookedSeats: 0,
    emptySeats: 0,
    money: 0
  }
  for (i = 0; i < layout.length; i++ ){
    for(j = 0; j < layout[i].length; j++) {
      status.totalSeat++
      if (layout[i][j].booked){
        status.bookedSeats++   
        if (layout[i][j].type === 'VIP') status.money += 600
        if (layout[i][j].type === 'NORMAL') status.money += 450
        if (layout[i][j].type === 'ECONOMIC') status.money += 300
      }
      if (layout[i][j].booked === false) status.emptySeats++    
    };  
  };

  return status
};
// console.log(partialState())





module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
}