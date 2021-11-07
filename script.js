// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var specialCharacter ="!@#$%^&*()_+";
var numericCharacter ="1234567890";
var upperCharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacter="abcdefghijklmnopqrstuvwxyz";

function generatePassword() {  
  var finalPassword="";
  var length = prompt("What is the Length of the password?");
    if (length <=0){
      alert("Invalid number of Character");
    }  else {
      var character= confirm ("Do you want Alpahbets in your Password?");
     
    if (character===true){
          var lowerC= confirm ("Do you want characters in your Lower Case?");
          var upperC= confirm ("Do you want characters in your Upper Case?");
      }
          var numeric= confirm ("Do you want characters in your Number?");
          var special= confirm ("Do you want characters in your Special Character?");
      
      if (special===true){
          finalPassword += specialCharacter.charAt(Math.floor(Math.random()*length));
      }
      if (numeric===true){
        finalPassword += numericCharacter.charAt(Math.floor(Math.random()*length));
      }
      if (lowerC===true){
      finalPassword += lowerCharacter.charAt(Math.floor(Math.random()*length));
      }
      if (upperC===true){
      finalPassword += upperCharacter.charAt(Math.floor(Math.random()*length));
      }
      remainder=finalPassword.length;
      if (character===true){
        for (var i=0;i<(length-(remainder));i++){
          finalPassword += upperCharacter.charAt(Math.floor(Math.random()*length));
      } 
      } else {
        for (var i=0;i<(length-(remainder));i++){
          finalPassword += numericCharacter.charAt(Math.floor(Math.random()*length));
      } 
      }

        
      
     return finalPassword;
      
     
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


