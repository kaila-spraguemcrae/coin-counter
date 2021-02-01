// import coinCounter from './..//js/coin-counter.js';

var myCoinCounterVariable = require('../src/js/coin-counter.js');
const coinCounter = myCoinCounterVariable.coinCounter; 

describe('coinCounter', ()=> {

  test("return 20 quarters", () => {
    expect(coinCounter(5)).toEqual([20,0,0,0]); 
  });
});