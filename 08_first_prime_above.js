/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(primeCandidate, factor) {
  return primeCandidate % factor === 0;
}

function isPrime(primeCandidate) {
  for (let factor = 2; factor < primeCandidate; factor++) {
    if (isDivisible(primeCandidate, factor)) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;
  
  if (number < 2) {
    return 2;
  }

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(n, actual, expected) {
  let message = "Prime number above " + addQuote(n) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFirstPrimeAbove(n, expected) {
  const actual = firstPrimeAbove(n);
  console.log(makeMessage(n, actual, expected));
}

function testingFunction() {
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(8, 11);
  testFirstPrimeAbove(7, 11);
}

testingFunction();