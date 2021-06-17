// var generateBtn = document.getElementById(generate);

//generateBtn.addEventListener("click", generatePassword);

// create a function that asks each question and prompts the user to confirm 


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdevghijklmnopqrstuv";
var special = "~!@#$%^&*()_+=?><";
var numbers = "1234567890";

const generateBtn = document.querySelector('#generate');
const generatedPass = document.querySelector('#password');

function generatePassword() {
    let possibleChars = "";
    let result = "";

    let passwordLength = window.prompt("How many characters do you want in your password?");

    if (passwordLength < 8 || passwordLength > 20) {
        window.alert('Password must be between 8 and 20! Hit the Generate Password Button again!');
        return;
    };

    let upperConfirm = window.confirm('Do you want UpperCase Characters?');
    let lowerConfirm = window.confirm('Do you want lowerCase Characters?');
    let specialConfirm = window.confirm('Do you want special Charaters?');
    let numbersConfirm = window.confirm('Do you wan Numbers?');

    if (upperConfirm) {
        possibleChars += upperCase;
    };

    if (lowerConfirm) {
        possibleChars += lowerCase;
    };

    if (specialConfirm) {
        possibleChars += special;
    };

    if (numbersConfirm) {
        possibleChars += numbers;
    };

    for (let i = 0; i < passwordLength; i++) {
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    generatedPass.textContent = result;
};



generateBtn.addEventListener('click', generatePassword);