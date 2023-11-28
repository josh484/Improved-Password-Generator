// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var lwc = false;
var pwc = false;
var nmc = false;
var spc = false;
var characterLength;

// Function to prompt user for password options
function getPasswordOptions() {
  /* check for password length */
  var characterCheck = false;

  
  /* checks length of password is within 8-128 otherwise prompt again */
  do {
    var characterLengthInput = prompt("Choose length of password between 8-128");
    characterLength = parseInt(characterLengthInput);
    if (isNaN(characterLength)) {
      characterLength = 0;
    }
    characterLengthT(characterLength, characterCheck);
    } while (characterCheck == false && characterLength < 8 || characterLength > 128 && characterCheck == false)



 
  /* Check for lowercase */
  var titleWord = "lowercase";
  lwc = promptCheck(titleWord);

  /* check for uppercase */
  titleWord = "uppercase"
  uwc = promptCheck(titleWord);

  /* check for numeric */
  titleWord = "number"
  nmc = promptCheck(titleWord);

  /* check for special character */
  titleWord = "special character"
  spc = promptCheck(titleWord);

}


// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return random
}


// Function to generate password with user input
function generatePassword() {
  /* if user does not choose at least one character type keep doing the function */
  do{
  getPasswordOptions();
  }
  while (lwc == false && pwc == false && nmc == false && spc == false)
  var everyArr = [];
  var letter;
  var chosen
  var random; 
  var password = "";

  /* push the array of characters to an array with all characters only if it is chosen by the user */
  if (lwc == true){
    everyArr.push(lowerCasedCharacters);
  }
  if (uwc == true){
    everyArr.push(upperCasedCharacters);
  }
  if (nmc == true){
    everyArr.push(numericCharacters);
  }
  if (spc == true){
    everyArr.push(specialCharacters)
  }

  /* loops using the chosen password length gets a random character from everyArr and adds them all to password*/
  for (i = 0; i < characterLength; i++){
    random = Math.floor(Math.random() * everyArr.length);
    chosen = getRandom(everyArr[random]);
    letter = everyArr[random][chosen]; 
    password += letter;
  }
  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function characterLengthT(x,y) {
  if (x.isNaN) {
    return y = false;
  }
  else {
    return y = true;
  }
}

/* creates a yes or no prompt for x to use for each type of character */
function promptCheck(x) {
  var Choice;
  var Check = false
  do{
  var Case = prompt("Should Password have " + x + ", type Y or N, You must have at least one of the options chosen") ;
  Choice = Case.toUpperCase();
  if (Choice == "Y" || Choice == "N") {
    Check = true;
    if (Choice == "Y") {
      return true;
    }else {
      return false;
    }
  }
  else {
    Check = false;
  }
  } while (Check == false)
}
