// Assignment Code
var generateBtn = document.querySelector("#generate")

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!","@","#","$","%","^","&","*",";","?","."]



// Write password to the #password input

function generatePassword(){
  var confirmLength = (prompt("How many characters would you like your password to have?"));
  while(confirmLength <= 8 || confirmLength >= 128){
    alert("password length must be 8-128 characters; try again");
    var confirmLength = (prompt("How many characters would you like?"));
  }

  alert(`Password will have ${confirmLength} characters`);


  var useUpperCase = confirm("click okay to use uppercase");
  var useLowerCase = confirm("click ok to use lowercase");
  var useNumbers = confirm("click ok to use numbers");
  var useSpecialChar = confirm("click ok to use special characters");


  var randomPassword =""

for (var i = 0; i < 0; i++) {

  useUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
  useLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  useNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  useSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];


if (useUpperCase === true){
  randomPassword+= upperCase
}

if (useLowerCase === true){
  randomPassword+= lowerCase
}

if (useNumbers === true){
  randomPassword+=numbers
}

if (useSpecialChar === true){
  randomPassword+= specialChar
}

}

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);