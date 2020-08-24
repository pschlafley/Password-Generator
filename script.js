var passCriteria = {
    upper:  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    special: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '?', '>', '<'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
};

//ask for length of password
var length = Number(prompt("How many characters do you want your password to be?"));
if (length >= 8 && length <= 128) {
    generatePassword();
} 
else {
        window.alert("Password must be between at least 8 characters long!");
    };


// create a function that asks each question and prompts the user to confirm 

function generatePassword () {
        var charTypeUpper = confirm("Do you want uppercase characters? If yes click the OK button");
        while (charTypeUpper === true) {
            passCriteria.upper = new Uint32Array(26);

            window.crypto.getRandomValues(passCriteria.upper);

            console.log("your random letters:");

            for (var i = 0; i < passCriteria.upper.length; i++) {
                console.log(passCriteria.upper[i]);
            }    
        } 
};




