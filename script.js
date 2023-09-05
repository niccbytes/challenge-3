// Assignment code here

// i defined the function and i console.logged inorder to make sure the button works
function generatePassword(){
  console.log('you clicked me') 

// all my code goes in here to meet the acceptance criteria and then then when you return it it handles the display on the screen
// 1.) promot the user

let passwordLength = prompt(`Choose a password length between 8 and 128 characters.`); // this is the variable prompt to ask for the lenght of the password

if (passwordLength >= 8 && passwordLength <= 128) { // this if statment then defines how short and long it needs to be

}
// a.) password lenght 8<128
// b.) uppercase lowercase special char and numbers
// 2.) validate the input
// 3.) display the password on the page

  return 'heres the password hoe' // this shows my password in the box
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
