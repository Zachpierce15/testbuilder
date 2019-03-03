// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
     if (Number(cardNumber[0]) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    	return "Visa"
    } 
    if ( Number(cardNumber[0] + cardNumber[1]) === 38  && cardNumber.length === 14 || Number(cardNumber[0] + cardNumber[1]) === 39  && cardNumber.length === 14) {
    	return "Diner's Club"
    } 
     if (Number(cardNumber[0] + cardNumber[1]) === 37 && cardNumber.length === 15 || Number(cardNumber[0] + cardNumber[1]) === 34 && cardNumber.length === 15) {
    	return "American Express"
    } 
    
     if (Number(cardNumber[0] + cardNumber[1]) === 51  && cardNumber.length === 16 || Number(cardNumber[0] + cardNumber[1]) === 52  && cardNumber.length === 16 || Number(cardNumber[0] + cardNumber[1]) === 53  && cardNumber.length === 16 || Number(cardNumber[0] + cardNumber[1]) === 54  && cardNumber.length === 16 || Number(cardNumber[0] + cardNumber[1]) === 55  && cardNumber.length === 16) {
    	return "MasterCard"
    }
    if ( (Number(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]) === 6011 || cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5] + cardNumber[6] === "644-649" || Number(cardNumber[0] + cardNumber[1])===65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return "Discover"
    }
};
