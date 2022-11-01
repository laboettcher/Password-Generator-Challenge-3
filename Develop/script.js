// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Main variables
var passwordLength;
var generateUpper;
var generateLower;
var generateNumber;
var generateSpecial;
var userChooses;

// Upper and lower case letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var blankLower = [];
var toLower = function (x) {
  return x.toLowerCase();
};
lowerCase = upperCase.map(toLower);

// Numbers and special characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", '"', "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "`", "{", "}", "~", "|", "_"];

// Password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create button
generateBtn.addEventListener("click", writePassword);


// Generate password function
function generatePassword() {
  passwordLength = prompt("Password must be between 8 and 128 characters. How many characters would you like?");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be between 8 and 128 characters");
    console.log("Password length " + passwordLength);
  } else {
    generateUpper = confirm("Would you like your password to have upper case letters?");
    console.log("Upper case " + generateUpper);

    generateLower = confirm("Would you like your password to have lower case letters?");
    console.log("Lower case " + generateLower);

    generateNumber = confirm("Would you like your password to have numbers?");
    console.log("Number " + generateNumber);

    generateSpecial = confirm("Would you like your password to have special characters?");
    console.log("Special character " + generateSpecial);
  };

  // Various possibilities and combinations of characters
  if (!generateUpper && !generateLower && !generateNumber && !generateSpecial) {
    userChooses = alert("You must choose the criteria.");
  } else if (generateUpper && generateLower && generateNumber && generateSpecial) {
    userChooses = upperCase.concat(lowerCase, numbers, specials);
    console.log(userChooses);
  } else if (generateUpper && generateLower && generateNumber) {
    userChooses = upperCase.concat(lowerCase, numbers);
    console.log(userChooses);
  } else if (generateUpper && generateLower && generateSpecial) {
    userChooses = upperCase.concat(lowerCase, specials);
    console.log(userChooses);
  } else if (generateUpper && generateNumber && generateSpecial) {
    userChooses = upperCase.concat(numbers, specials);
    console.log(userChooses);
  } else if (generateLower && generateNumber && generateSpecial) {
    userChooses = lowerCase.concat(numbers, specials);
    console.log(userChooses);
  } else if (generateUpper && generateLower) {
    userChooses = upperCase.concat(lowerCase);
    console.log(userChooses);
  } else if (generateUpper && generateNumber) {
    userChooses = upperCase.concat(numbers);
    console.log(userChooses);
  } else if (generateUpper && generateSpecial) {
    userChooses = upperCase.concat(specials);
    console.log(userChooses);
  } else if (generateLower && generateNumber) {
    userChooses = lowerCase.concat(numbers);
    console.log(userChooses);
  } else if (generateLower && generateSpecial) {
    userChooses = lowerCase.concat(specials);
    console.log(userChooses);
  } else if (generateNumber && generateSpecial) {
    userChooses = numbers.concat(specials);
    console.log(userChooses);
  } else if (generateUpper) {
    userChooses = upperCase;
    console.log(userChooses);
  } else if (generateLower) {
    userChooses = blankLower.concat(lowerCase);
    console.log(userChooses);
  } else if (generateNumber) {
    userChooses = numbers;
    console.log(userChooses);
  } else if (generateSpecial) {
    userChooses = specials;
    console.log(userChooses);
  };

  // Password length (chosen)
  var passwordBlank = [];

  // Random selection of variables
  for (var i=0; i < passwordLength; i++) {
    var choices = userChooses[Math.floor(Math.random() * userChooses.length)];
    passwordBlank.push(choices);
    console.log(choices);
  }

  // Provide password at end
  var password = passwordBlank.join("");
  console.log("Your new password is: " + password);
  return password;
};