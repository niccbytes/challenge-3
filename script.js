// Assignment code here

// i defined the function and i console.logged inorder to make sure the button works
function generatePassword(){
  console.log('you clicked me') 
  



// 1.) promot the user DONE

let passwordLength = prompt(`Choose a password length between 8 and 128 characters.`); // this is the variable prompt to ask for the lenght of the password

if (passwordLength >= 8 && passwordLength <= 128) { // this if statment defines how short and long it needs to be
  let includeUpperCase = confirm(`would you like to include uppercase letters?`);
  let includeLowerCase = confirm(`would you like to include lowercase letters?`);
  let includeNumbers = confirm(`would you like to include numbers in this password?`);
  let includeSpecialCharacters = confirm(`would you like to include any special characters in this password?`)


// charachter set 
let characters = '';{
    if (includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialCharacters) characters += '!@#$%^&*()_+{}[]|:;"<>,.?/~';
}

    // Check if they picked one 
    if (characters === '') {
      alert("You must include at least one character type (uppercase, lowercase, numbers, or special characters).");
      return "";
    }

    // this generates the password
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password; // this returns the password and shuvs it back to the box inorder to be displayed
  } else {
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return "";
  }
}

// a.) password lenght 8<128 DONE
// b.) uppercase lowercase special char and numbers prompt DONE




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
