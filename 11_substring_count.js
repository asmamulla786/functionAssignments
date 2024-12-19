/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrences(string, substring) {
  let noOfOccurrences = 0;

  for (let index = 0; index < string.length; index++) {
    const isSubtringFound = matchAtPosition(string, substring, index);
    if (isSubtringFound) {
      noOfOccurrences++;
    }
  }

  return noOfOccurrences;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, substring, actual, expected) {
  let message = "Count of " + addQuote(substring);
  message = message + " in " + addQuote(string) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSubstringCount(string, substring, expected) {
  const actual = occurrences(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testSubstringCount('a', 'a', 1);
  testSubstringCount('aa', 'aa', 1);
  testSubstringCount('aaa', 'a', 3);
  testSubstringCount('', 'a', 0);
  testSubstringCount('asma', '', 0);
}

testingFunction();
