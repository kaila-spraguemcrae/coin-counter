const coinCounter = (amount, array = [0,0,0,0]) => { 
  if (amount == 0) {
    return array; 
  }
  else if (amount/.25 >= 1) {
    const quarters = Math.floor(amount/.25);
    console.log("quarters: " + quarters); 
    console.log((amount - quarters*.25).toFixed(2)); 
    array[0] = quarters; 
    return coinCounter((amount - quarters*.25).toFixed(2), array);
  }
  else if (amount/.10 >= 1) {
    const dimes = Math.floor(amount/.10);  
    console.log("dimes: " + dimes);
    console.log((amount-dimes*.10).toFixed(2)); 
    array[1] = dimes; 
    return coinCounter((amount-dimes*.10).toFixed(2), array);
  }
  else if (amount/.05 >= 1) { 
    const nickels = Math.floor(amount/.05); 
    console.log("nickels: " + nickels);
    console.log((amount-nickels*.05).toFixed(2)); 
    array[2] = nickels; 
    return coinCounter((amount-nickels*.05).toFixed(2), array);
  }
  else if (amount/.01 >= 1) { 
    const pennies = Math.floor(amount/.01); 
    console.log("pennies: " + pennies);
    console.log((amount-pennies*.01).toFixed(2)); 
    array[3] = pennies; 
    return coinCounter((amount-pennies*.01).toFixed(2), array);
  } 
}
