 // var generateBtn = document.getElementById(generate);

  //generateBtn.addEventListener("click", generatePassword);

// create a function that asks each question and prompts the user to confirm 


var passWord= "";
var upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdevghijklmnopqrstuv";
var special = "~!@#$%^&*() _+=?><";
var numbers = "1234567890";

var length = Number(prompt("How many characters do you want your password to be?"));
if (length >= 8 && length <= 100) {
    generatePassword();
}
else {
    window.alert("Must be 8 or more!");
}

function generatePassword() {

    window.confirm("Do you want uppercase characters? If yes click the OK button"); 
    while (passWord.length >= 8 || passWord.length < 70) {
        passWord += upperCase[Math.floor(Math.random()) * upperCase];
    }
};    
generatePassword();

      





