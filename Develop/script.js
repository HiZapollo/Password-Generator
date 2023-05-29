//Assignment code here

var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

function generatePassword(){
  var length = prompt("Enter a password length between 8 and 128 characters: ")
  var haveUpper = confirm("Include Uppercase Letters?")
  var haveLower = confirm("Include Lowercase Letters?")
  var haveNum = confirm("Include Numbers?")
  var haveSpecial = confirm("Include Special Characters?")

  var password = ''
  var choices = ''
  if (length < 8){
    length = 8
  } if (length > 128){
    length = 128
  } if(haveLower){
    choices += letters
  } if (haveUpper){
    choices += letters.toUpperCase()
  } if (haveNum){
    choices += numbers
  } if (haveSpecial){
    choices += specials
  } if (!haveLower && !haveUpper && !haveNum && !haveSpecial){
    choices += letters
  }
  
  
  while (password.length < length){
    password += choices.charAt(Math.floor(Math.random() * choices.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
