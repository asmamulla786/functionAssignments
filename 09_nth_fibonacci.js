/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(n) {
  let previousTerm = 0;
  let currentTerm = 1;

  for (let count = 1; count < n; count++) {
    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }
  
  return previousTerm;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(n, actual, expected) {
  let message = "Fibonacci term at position " + addQuote(n) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testNthFibonacci(n, expected) {
  const actual = nthFibonacciTerm(n);
  console.log(makeMessage(n, actual, expected));
}

function testingFunction() {
  testNthFibonacci(2, 1);
  testNthFibonacci(1, 0);
  testNthFibonacci(4, 2);
  testNthFibonacci(6, 5);
  testNthFibonacci(7, 8);
}

testingFunction();