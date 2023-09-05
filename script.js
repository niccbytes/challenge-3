// Assignment code here

// i defined the function and i console.logged inorder to make sure the button works
function generatePassword(){
  console.log('you clicked me') 
  

// all my code goes in here to meet the acceptance criteria and then then when you return it it handles the display on the screen
// 1.) promot the user

let passwordLength = prompt(`Choose a password length between 8 and 128 characters.`); // this is the variable prompt to ask for the lenght of the password

if (passwordLength >= 8 && passwordLength <= 128) { // this if statment then defines how short and long it needs to be
  let includeUpperCase = confirm(`would you like to include uppercase letters?`);
  let includeLowerCase = confirm(`would you like to include lowercase letters?`);
  let includeNumbers = confirm(`would you like to include numbers in this password?`);
  let includeSpecialCharacters = confirm(`would you like to include any special characters in this password?`)


// charachter set 
let characters = '';
    if (includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialCharacters) characters += '!@#$%^&*()_+{}[]|:;"<>,.?/~';


// a.) password lenght 8<128 DONE
// b.) uppercase lowercase special char and numbers prompt DONE

// 2.) validate the input


// 3.) display the password on the page

  return (``); // this shows my password in the box
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
