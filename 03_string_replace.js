/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function charToBeAdded(text, index, match, replacement) {
  return text[index] === match ? replacement : text[index];
}

function replace(text, match, replacement) {
  let replacedString = "";
  
  for (let textIndex = 0; textIndex < text.length; textIndex++) {
    replacedString += charToBeAdded(text, textIndex, match, replacement);
  }

  return replacedString;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(text, match, replacement, actual, expected) {
  let message = "The text " + addQuote(text) + " after replacing the character ";
  message = message + addQuote(match) + " with " + addQuote(replacement) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const message = makeMessage(text, match, replacement, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStringReplace('hello world', 'l', 'n', 'henno wornd');
  testStringReplace('no spaces in here', ' ', '', 'nospacesinhere');
  testStringReplace('', 'd', 'e', '');
}

testingFunction();