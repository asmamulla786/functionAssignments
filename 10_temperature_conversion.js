
/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isValidUnit(unit) {
  const isValid = unit === "K" || unit === "C" || unit === "F";

  return isValid;
}

function fahrenheitToCelsius(value) {
  return (value - 32) * 5/9;
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function convertToCelsius(from, value) {
  if (from === "K") {
    return kelvinToCelsius(value);
  }

  if (from === "F") {
    return fahrenheitToCelsius(value);
  }

  return value;
}

function celsiusToKelvin(value) {
  return +value + 273.15;
}

function celsiusToFahrenheit(value) {
  return value * 9/5 + 32;
}

function convertFromCelsius(to, value) {
  if(to === "K") {
    return celsiusToKelvin(value);
  }

  if (to === "F") {
    return celsiusToFahrenheit(value);
  }

  return value;
}

function convert(from, to, value) {
  if (!isValidUnit(from) || !isValidUnit(to)) {
    return NaN;
  }
  
  if (from === to) {
    return +value;
  }
  const tempInCelsius = convertToCelsius(from, value);
  
  return convertFromCelsius(to, tempInCelsius);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(from, to, value, actual, expected) {
  let message = "Converting " + addQuote(value) + " from " + addQuote(from);
  message = message + " to " + addQuote(to);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testTempConvertion(from, to, value, expected) {
  const actual = convert(from, to, value);
  const message = makeMessage(from, to, value, actual, expected);
  console.log(message);
}

function testingFunction() {
  testTempConvertion("C", "K", 0, 273.15);
  testTempConvertion("C", "F", "37", 98.6);
  testTempConvertion("F", "K", 98.6, 310.15);
  testTempConvertion("F", "C", -40, -40);
  testTempConvertion("K", "C", 100, -173.14999999999998);
  testTempConvertion("K", "F", 100, -279.66999999999996);
  testTempConvertion("F", "F", 100, 100);
  testTempConvertion("C", "F", 100, 212);
  testTempConvertion("F", "C", 96, 35.6);
  testTempConvertion("K", "F", "200", -99.67);
  testTempConvertion("F", "t", 96, NaN);
  testTempConvertion("t", "t", 100, NaN);
  testTempConvertion("K", "K", "NaN", NaN);
  testTempConvertion("Kt", "F", "ac", NaN);
  testTempConvertion("c", "x", "100", NaN);
  testTempConvertion("C", "C", "gfgh", NaN);
  testTempConvertion("C", "K", "gfgh", NaN);
  // testTempConvertion("C", "K", true, NaN);
  // testTempConvertion("C", "C", true, NaN);
//   testTempConversion('C', 'K', 0, 273.15);
//   testTempConversion('C', 'F', 37, 98.6);
//   testTempConversion('F', 'K', 98.6, 310.15);
//   testTempConversion('F', 'C', -40, -40);
//   testTempConversion('K', 'C', 100, -173.15);
//   testTempConversion('K', 'F', 100, -279.67);
//   testTempConversion('C', 'C', 10, 10);
//   testTempConversion('F', 'F', -34, -34);
//   testTempConversion('K', 'K', 83.2, 83.2);
//   testTempConversion('X', 'K', 83.2, NaN);
//   testTempConversion('K', 'F', '200', -99.6);
//   testTempConversion('B', 'A', "100", NaN);
//   testTempConversion('B', 'B', NaN, NaN);
//   testTempConversion('K', 'F', "100", -279.67);
//   testTempConversion('K', 'K', "100", 100);
//   testTempConversion('K', 'K', "NaN", NaN);
//   testTempConversion('K', 'K', "ab", NaN);
//   testTempConversion('K', 'F', "ab", NaN);
//   testTempConversion('C', 'K', "ab", NaN);
//   testTempConversion('C', 'C', "ab", NaN);
}

testingFunction();

