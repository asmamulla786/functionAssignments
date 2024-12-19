/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, target, actual, expected) {
  let message = "The target character " + addQuote(target);
  message = message + " in " + addQuote(string) + " is found at position";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(string, substring, expected) {
  const actual = findIndex(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFindIndex('a', 'a', 0);
  testFindIndex('abbbbb', 'b', 1);
  testFindIndex('hello world', 'a', -1);
}

testingFunction();
