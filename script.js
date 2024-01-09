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
var options = { special:specialCharacters,numeric:numericCharacters,lowerCased:lowerCasedCharacters,upperCased:upperCasedCharacters}

var allTypes = Object.keys(options)

var usercharacterChoiec = []
var randomCharacterChoiec = []
var valueArray = []


// Function to prompt user for password options
function getPasswordOptions() {
  var required  =parseFloat(prompt("Please specify the length of your required Password,At least 8 characters but no more than 128!"));
  alert("Please Chose at least on Character Type!")
  for (var t=0;t<allTypes.length;t++){
    var userReply = confirm(`Do you want your password to include ${allTypes[t]}`)
      if(userReply){
        usercharacterChoiec.push(allTypes[t])
      }
  } 
  if (((required<129) && (required>8)) && usercharacterChoiec.length>0 ){
    alert("Alright,Lets go!")
  }
  else if((required>128) || (required<8)|| isNaN(required)) {
    alert("Please make sure to chose a number between 8 and 128(both inclusive)!" )
    usercharacterChoiec = []
    requiredLength=getPasswordOptions()
  }
  else if (usercharacterChoiec.length==0){
  alert("Please make sure you chosed at least one character type!")
  usercharacterChoiec = []
  requiredLength=getPasswordOptions()
  }
  return required
}

// Function for getting a random element from an array
function getRandom(arr) {
  var i = Math.floor(Math.random()*(arr.length))
  return arr[i]
}

// Function to generate password with user input
function generatePassword() {
  for (var t=0;t<requiredLength;t++){
    var r = Math.floor(Math.random()*(usercharacterChoiec.length))
    randomCharacterChoiec.push(usercharacterChoiec[r])
  }
  console.log(randomCharacterChoiec)
  for (var v=0 ; v< randomCharacterChoiec.length;v++){
    var ind = randomCharacterChoiec[v]
     valueArray.push(options[ind])
  }
  console.log(valueArray)
  var passwordArray = valueArray.map(getRandom)
  console.log(passwordArray)
  
    var final = passwordArray.join('')
  

  return final

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
requiredLength=getPasswordOptions()