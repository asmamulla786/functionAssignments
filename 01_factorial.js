/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let productOfTerms = 1;

  for (let term = 1; term <= number; term++) {
    productOfTerms = productOfTerms * term;
  }

  return productOfTerms;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(number, actual, expected) {
  let message = "the factorial of " + addQuote(number) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const message = makeMessage(number, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFactorial(3, 6);
  testFactorial(5, 120);
  testFactorial(0, 1);
  testFactorial(1, 1);
}

testingFunction();