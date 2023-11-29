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
    characterLength = checkNumber();
    pwc = myCheckBox("flexSwitchCheckChecked1");
    lwc = myCheckBox("flexSwitchCheckChecked2");
    nmc = myCheckBox("flexSwitchCheckChecked3");
    spc = myCheckBox("flexSwitchCheckChecked4");
}


// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return random
}


// Function to generate password with user input
function generatePassword() {
  /* if user does not choose at least one character type keep doing the function */
  getPasswordOptions();
  if (lwc == false && pwc == false && nmc == false && spc == false) {
    alert("must have at least one type of character")
  }
  var everyArr = [];
  var letter;
  var chosen
  var random; 
  var password = "";

  /* push the array of characters to an array with all characters only if it is chosen by the user */
  if (lwc == true){
    everyArr.push(lowerCasedCharacters);
  }
  if (pwc == true){
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



function myCheckBox(x) {
  var checkBox = document.getElementById(x);
  if (checkBox.checked == true){
    return true
  }
  else {
    return false
  }
}

function checkNumber() {
  var numbers = document.getElementById("exampleInputEmail1").value;
  if(numbers < 8 || numbers > 128 && numbers == false){
    alert("Please type a number between 8-128");
  }
  else {
    return numbers
  }
}
