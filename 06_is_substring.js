/*
  Implement the below function that tells if a string is substring of another
  string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isMatchingFromIndex(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    if (string[index + subIndex] !== subString[subIndex]) {
      return false;
    }
  }
  return true;
}

function setIndex(subStringLength, stringLength) {
  return subStringLength === 0 ? stringLength : 0;
}

function isSubstring(string, subString) {
  let index = setIndex(subString.length, string.length);

  for (index; index < string.length; index++) {
    const isStringFound = isMatchingFromIndex(string, subString, index);

    if (isStringFound) {
      return true;
    }
  }
  
  return false;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, substring, actual, expected) {
  let message = "The substring " + addQuote(substring) + " in ";
  message = message + addQuote(string) + " is found is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsSubstring(string, substring, expected) {
  const actual = isSubstring(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testIsSubstring('a', 'a', true);
  testIsSubstring('aa', 'aa', true);
  testIsSubstring('aaa', 'b', false);
  testIsSubstring('', 'a', false);
  testIsSubstring('', '', false);
  testIsSubstring('asma', '', false);
}

testingFunction();