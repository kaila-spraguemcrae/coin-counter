// import coinCounter from './..//js/coin-counter.js';

var myCoinCounterVariable = require('../src/js/coin-counter.js');
const coinCounter = myCoinCounterVariable.coinCounter; 

describe('coinCounter', ()=> {

  test("return 20 quarters", () => {
    expect(coinCounter(5)).toEqual([20,0,0,0]); 
  });

  test("return 1 dime", () => {
    expect(coinCounter(0.10)).toEqual([0, 1, 0, 0]);
  });
  
  test("return 1 nickel", () => {
    expect(coinCounter(0.05)).toEqual([0, 0, 1, 0]);
  });
});