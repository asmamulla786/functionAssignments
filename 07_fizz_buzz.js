/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisible(number, 15)) {
    return "fizzbuzz";
  }

  if (isDivisible(number, 3)) {
    return "fizz";
  }

  if (isDivisible(number, 5)) {
    return "buzz";
  }

  return number + "";
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(n, actual, expected) {
  let message = "Fizzbuzz of " + addQuote(n) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFizzBuzz(n, expected) {
  const actual = fizzBuzz(n);
  console.log(makeMessage(n, actual, expected));
}

function testingFunction() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(8, "8");
}

testingFunction();