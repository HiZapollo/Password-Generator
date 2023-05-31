//Assignment code here

//Strings containing all the characters for the different criteria
var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

//function that runs when the generate button is clicked
function generatePassword(){
  //Prompts for each of the criteria
  var length = prompt("Enter a password length between 8 and 128 characters: ")

  if (length < 8){//if the user chooses a length under 8, alert and restart
    alert("ERROR: Length must be higher than 8 characters! Try again.");
    return "Try Again: Can't be under 8 characters.";
  } if (length > 128){//if the user chooses a length over 128, alert and restart
    alert("ERROR: Length must be lower than 128 characters! Try again.");
    return "Try Again: Can't be over 128 characters.";
  } 

  var haveUpper = confirm("Include Uppercase Letters?")
  var haveLower = confirm("Include Lowercase Letters?")
  var haveNum = confirm("Include Numbers?")
  var haveSpecial = confirm("Include Special Characters?")

  //Empty password string, and empty choices string, which will include the criteria based off of input
  var password = ''
  var choices = ''

  //adds the criteria to the choices
  if(haveLower){
    choices += letters
  } if (haveUpper){
    choices += letters.toUpperCase()
  } if (haveNum){
    choices += numbers
  } if (haveSpecial){
    choices += specials
  } if (!haveLower && !haveUpper && !haveNum && !haveSpecial){//if none were chosen, alert and restart
    alert("ERROR: Must choose at least one criteria! Try again.");
    return "Try Again: Please select criteria.";
  }
  
  //Loop that will run until the password is the desired length, chooses a random character from choices and adds it to password
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
