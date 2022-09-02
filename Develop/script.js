// Assignment code here

function generatePassword() {

var input = window.prompt("How many characters do you want your password to have?")

var passwordLength = parseInt(input)

if (passwordLength < 8 || passwordLength > 128){
  window.alert("Password length must be between 8 and 128 characters")
  // return
}
var userNumbers = window.confirm("Do you want numbers included in your password?")

var userSymbols = window.confirm("Do you want symbols included in your password?")

var userLowerCase = window.confirm("Do you want lower case letters included in your password?")

var userUpperCase = window.confirm("Do you want upper case letters included in your password?")

}



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
document.addEventListener("click", writePassword);

// generatePassword()