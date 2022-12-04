const { checkSeatStatus, getRowNumber, book, } = require('../homework');



describe('checkSeatStatus', () => {

    it('checkSeatStatus is a function', () => { 
    expect(typeof checkSeatStatus).toBe('function');
    });

    it('first parameter must be string', () => {  
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
     });
     
     it('second parameter must be number', () => {
      expect(() => checkSeatStatus("hola","6")).toThrow(new TypeError('Second parameter is not a number'));
     });

    it('first parameter must be only a letter', () => {
    expect(() => checkSeatStatus('AA', 0)).toThrow(new TypeError('first parameter must be only a letter'))
    }); 

    it('the range of letters is not accepted', () => {
    expect(() => checkSeatStatus('O',0)).toThrow(new TypeError ('the range of letters is not accepted')) 
    });

    it('seat status', () => {
      expect(checkSeatStatus('A', 2)).toBe(true);   
    });
    
    it('seat status', () => {
       expect(checkSeatStatus('B', 0)).toBe(false);
    });
});


describe('getRowNumber', () => {

    it('get row number', () => {
        expect(getRowNumber('A')).toBe(0);
    });
    
    it('get row number', () => {
        expect(getRowNumber('C')).toBe(2);
    });
});


describe('book', () => {

    it('if the seat is free, reserve it', () => {
        expect(book('A', 0)).toBe('Seat in A0 successfully booked');
    });
    it('if the seat is occupied, notify', () => {
        expect(book('D', 0)).toBe('Seat in D0 is already booked');
    });

    it('can not booked twice', () => {
        expect(checkSeatStatus('B', 0)).toBe(false);
        expect(book('B', 0)).toBe('Seat in B0 successfully booked');
        expect(checkSeatStatus('B', 0)).toBe(true)
    });
});
