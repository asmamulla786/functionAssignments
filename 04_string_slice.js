/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}

function min(firstNumber, secondNumber) {
  return firstNumber < secondNumber ? firstNumber : secondNumber;
}

function slice(text, start, end) {
  let subString = "";
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);
  
  for (let index = startIndex; index <= endIndex; index++) {
    subString = subString + text[index];
  }

  return subString;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(text, start, end, actual, expected) {
  let message = "The string slice of " + addQuote(text);
  message = message + " from position " + addQuote(start);
  message = message + " to " + addQuote(end) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const message = makeMessage(text, start, end, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('negative start', -1, 8, 'negative ');
  testStringSlice('', 0, 10, '');
}

testingFunction();
