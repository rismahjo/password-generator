// This generator will create a password between 8-128 characters based on the accepted criteria. 

// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["~", "!", "?", "%", "&", "+", "-", ".", ",", "*", "/", "<", ">"];

// Variables
var confirmLength = "";
var confirmNumeric;
var confirmLower;
var confirmUpper;
var confirmSpecial;

// Prompt user for number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop to keep within 8-128 character requirement
  while (confirmLength <= 7 || confirmLength >= 129) {
    ("Password length must be between 8-128 characters. Please try again.")
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  // Confirm number of characters
  alert('Your password will have ' + confirmLength + ' characters');

  //Confirm the criteria of the password
  var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLower = confirm("Click OK to confirm if you like to include lowercase characters");
  var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
  var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
  // Loop to make sure at least one criteria has been selected
  while (confirmNumeric === false && confirmLower === false && confirmUpper === false && confirmSpecial === false) {
    alert("You must choose at least one criteria");
    var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLower = confirm("Click OK to confirm if you like to include lowercase characters");
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
  }

  // Assign confirmation assignments to the selected criteria
  var passwordCharacters = []

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }
  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }

  console.log(passwordCharacters)

  // Create empty string to be looped into based on random characters from the arrays
  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}