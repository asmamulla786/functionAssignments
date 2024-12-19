/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function matchAtPosition(string, subString, position) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    if (string[position + subIndex] !== subString[subIndex]) {
      return false;
    }
  }
  
  return true;
}

function endsWith(string, substring) {
  const index = string.length - substring.length;
  return matchAtPosition(string, substring, index);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, substring, actual, expected) {
  let message = "the " + addQuote(string) + " ends with " + addQuote(substring);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testEndsWith(string, substring, expected) {
  const actual = endsWith(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testEndsWith('a', 'a', true);
  testEndsWith('ab', 'ab', true);
  testEndsWith('hello world', 'word', false);
  testEndsWith('hello world  ', ' ', true);
  testEndsWith('', '', true);
}

testingFunction();