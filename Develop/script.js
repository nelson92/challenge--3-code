// Assignment code here

function generatePassword() {

  var input = window.prompt("How many characters do you want your password to have?")

  var passwordLength = parseInt(input)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return;
  }
  var userNumbers = window.confirm("Do you want numbers included in your password?")

  var userSymbols = window.confirm("Do you want symbols included in your password?")

  var userLowerCase = window.confirm("Do you want lower case letters included in your password?")

  var userUpperCase = window.confirm("Do you want upper case letters included in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var symbolList = ["!", "@", "#", "$", "%", "&", "*", "?"]

  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// combine arrays into 1 big array, based on the users choices
  var userInput = []

  if (userNumbers === true) {
    userInput = numberList.concat(userInput)
  }
  if (userSymbols === true) {
    userInput = symbolList.concat(userInput)
  }
  if (userUpperCase === true) {
    userInput = upperCaseList.concat(userInput)
  }
  if (userLowerCase === true) {
    userInput = lowerCaseList.concat(userInput)
  }
  // if (userNumbers === true) {
    var index = Math.floor(Math.random() * userInput.length);
    var userChoice = userInput[index];
    // window.prompt("The computer chose " + userChoice);

  // }
  return userChoice;

}

// function randomInt(min, max) {
  // return Math.floor(Math.random())
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // what does .value mean here?
  passwordText.value = password;

}

// Add event listener to generate button
// generateBtndoc.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);

// generatePassword()