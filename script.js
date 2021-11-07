// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
//Data values
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLetter = "abcdefghijklmnopqrstuvwxyz".split("");
var symbol = "!@#$%&*?";
var num = "0123456789";
var allChars = [];
var result = "";

//Eventlistener q (Button click)
generateBtn.addEventListener("click", writePassword);

//Write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#generate");
}

//Prompts, confirms, criteria
function generatePassword() {
  alert("Please generate a password between 8 and 128 characters.");

  var passLength = prompt("How long would you like your password to be?");
  //If else criteria
  if (passLength < 128) {
  } else {
    return generatePassword;
  }
  if (passLength > 8) {
  } else {
    return generatePassword;
  }
  console.log(passLength);
  //Confirm content
  var uppercaseConfirm = confirm(
    "Would you like to include any uppercase letters"
  );

  var lowercaseConfirm = confirm(
    "Would you like to include any lowercase letters?"
  );

  var specialConfirm = confirm(
    "Would you like to include any special characters?"
  );

  var numConfirm = confirm("Would you like to include any numbers?");

  //When conditions are met
  if (uppercaseConfirm) {
    console.log(uppercaseConfirm);
    allChars.push(...upperLetter);
  }
  if (lowercaseConfirm) {
    console.log(lowercaseConfirm);
    allChars.push(...lowerLetter);
  }
  if (specialConfirm) {
    console.log(specialConfirm);
    allChars.push(...symbol);
  }
  if (numConfirm) {
    console.log(numConfirm);
    allChars.push(...num);
  }
  console.log(allChars);
  //My math
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length); //return an index number
    var randomChar = allChars[randomIndex];
    result += randomChar;
  }
  console.log(result);
  document.getElementById("password").textContent = result;
}
