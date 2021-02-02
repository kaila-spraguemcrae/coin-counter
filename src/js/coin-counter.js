
// have amount be a part of the array you pass in. 
// working version
export const coinCounter = (amount, array = []) => { 
  if (amount == 0) {
    return array; 
  }
  else if (amount/.25 >= 1) {
    const quarters = Math.floor(amount/.25);
    const quartersArray = [quarters, 0, 0, 0] 
    return coinCounter((amount - quarters*.25).toFixed(2), quartersArray);
  }
  else if (amount/.10 >= 1) {
    const dimes = Math.floor(amount/.10);  
    const dimesArray = [array[0], dimes, 0, 0] 
    return coinCounter((amount-dimes*.10).toFixed(2), dimesArray);
  }
  else if (amount/.05 >= 1) { 
    const nickels = Math.floor(amount/.05); 
    const nickelsArray = [array[0], array[1], nickels, 0] 
    return coinCounter((amount-nickels*.05).toFixed(2), nickelsArray);
  }
  else if (amount/.01 >= 1) { 
    const pennies = Math.floor(amount/.01); 
    const penniesArray = [array[0], array[1], array[2], pennies]
    return coinCounter((amount-pennies*.01).toFixed(2), penniesArray);
  } 
}; 

//one if else statement works
const coinCounterV2 = (amount, array = []) => { 
  if (amount == 0) {
    return array; 
  }
  else {
    const quarters = Math.floor(amount/.25)
    const amountMinusQuarters = (amount - quarters*.25).toFixed(2); 
    const dimes = Math.floor(amountMinusQuarters/.1)
    const amountMinusDimes = (amountMinusQuarters - dimes*.1).toFixed(2); 
    const nickels = Math.floor(amountMinusDimes/.05)
    const amountMinusNickels = amountMinusDimes - nickels*.05.toFixed(2); 
    const pennies = Math.floor(amountMinusNickels/.01)
    const newArray = [quarters, dimes, nickels, pennies]
    return coinCounter(0, newArray); 
  }
}

exports.coinCounter = coinCounter; 

  // console.log("quarters: " + quarters); 
  // console.log((amount - quarters*.25).toFixed(2)); 

  // console.log("dimes: " + dimes);
  // console.log((amount-dimes*.10).toFixed(2)); 

  // console.log("nickels: " + nickels);
  // console.log((amount-nickels*.05).toFixed(2)); 

  // console.log("pennies: " + pennies);
  // console.log((amount-pennies*.01).toFixed(2)); 

//Kaila try
  const coinCounter = (amount, array = [0,0,0,0]) => { 
    if (amount == 0) {
      return array; 
    } else if (amount/.25 >= 1) {
      const quarters = Math.floor(amount/.25);
      const coinArray = array.map(function(el, index){
        return index === 0 ? quarters:el
      });
      return coinCounter((amount - quarters*.25).toFixed(2), coinArray);
    } else if (amount/.10 >= 1) {
      const dimes = Math.floor(amount/.10);  
      const coinArray = array.map(function(el, index){
        return index === 1 ? dimes:el
      });
      return coinCounter((amount-dimes*.10).toFixed(2), coinArray);
    } else if (amount/.05 >= 1) { 
      const nickels = Math.floor(amount/.05); 
      const coinArray = array.map(function(el, index){
        return index === 2 ? nickels:el
      });
      return coinCounter((amount-nickels*.05).toFixed(2), coinArray);
    }
  }

    
    
    // else if (amount/.01 >= 1) { 
    //   const pennies = Math.floor(amount/.01); 
    //   const penniesArray = [array[0], array[1], array[2], pennies]
    //   return coinCounter((amount-pennies*.01).toFixed(2), penniesArray);
    // } 
  // }; 
