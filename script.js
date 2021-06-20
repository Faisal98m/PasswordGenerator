// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCritera = {};
var alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
var aplhabetUppercase = alphabetLowercase.toUpperCase()
var Numbers = '0123456789'
var Special = '!@£$^&*'
function passwordLength (){
   var userPasswordLength = prompt("How long would you like the password?")
  var userPasswordLengthParsed = parseInt(userPasswordLength);
if(!Number.isNaN(userPasswordLengthParsed)){
  if(userPasswordLengthParsed >= 8 && userPasswordLengthParsed <=128){
    passwordCritera.passwordLength = userPasswordLengthParsed
    console.log(passwordCritera)
  };
 };
}

function checkLowercase(){
   var isLowercase = confirm ("Is it lower case")
   passwordCritera.isLowercase = isLowercase
}
function checkUppercase(){
  var isUppercase = confirm ("is it upper case")
  passwordCritera.isUppercase = isUppercase
}
function checkNumeric(){
  var isNumeric = confirm ("Is it numberic")
  passwordCritera.isNumeric = isNumeric
}
function checkSpecial(){
  var isSpecial = confirm ("Is it special")
  passwordCritera.isSpecial = isSpecial
}

function generatePasswordCriteria(){
  passwordLength();
  checkLowercase();
  checkUppercase();
  checkNumeric();
  checkSpecial();
  console.log(passwordCritera);
}


function generatePassword(){
  var length = passwordCritera.passwordLength;
  var charset = "";
  if(passwordCritera.isLowercase){
    charset +=alphabetLowercase
  }
  if(passwordCritera.isUppercase){
    charset +=aplhabetUppercase
  }
  if(passwordCritera.isNumeric){
    charset += Numbers
  }
  if(passwordCritera.isSpecial)
  charset += Special

        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

}
// Write password to the #password input
function writePassword() {
  generatePasswordCriteria()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
