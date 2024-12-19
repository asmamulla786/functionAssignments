/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend , divisor) {
  return dividend  % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return (!isDivisible(year, 100) && isDivisible(year, 4));
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(year, actual, expected) {
  let message = "the year " + addQuote(year) + " is leap year";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testLeapYear(year, expected) {
  const actual = isLeapYear(year);
  const message = makeMessage(year, actual, expected);
  console.log(message);
}

function testingFunction() {
  testLeapYear(4, true);
  testLeapYear(100, false);
  testLeapYear(400, true);
  testLeapYear(1900, false);
}

testingFunction();