﻿//determine if the word is a palindrome

function palindrome() {
    //takes in user input through element with the id of input1
    let inpuWord = document.getElementById("input1").value;
    let reverseWord = ""; //creating an empty string variable 

    //created a for loop to loop through each character of a string
    for (let loop = inpuWord.length - 1; loop >= 0; loop--) {
        reverseWord += inpuWord.charAt(loop);
    }

    //if the input field is empty return an alert to the user 
    if (inpuWord == "") {
        alert("You must enter a word")
        return;
    }

    //if input is equal to the reversed word then alert the word is a palindrome
    if (inpuWord == reverseWord) {
        alert("you're correct!!")
    }
    //else alert if word input is not a palindrome
    else {
        alert("Wrong");
    }
    //outputs the reversed word to the html element flipResult
    document.getElementById("flipResult").innerHTML = reverseWord;

}

//user validation
document.getElementById("input1").addEventListener("keydown", function (e) {
    //variable char determines which key is pressed
    let char = e.which ? e.which : e.keyCode;
    
    //then we create a conditional statement that determines if we can enter the key that was pressed. a-z, A-Z, backspace.
    if (char >= 97 && char <= 122 || char >= 65 && char <= 90 || char == 8 ) {
        return true;
    } else {
        e.preventDefault();//makes sure the action will not happen before user input
        return false;
    }
});




//user validation 
//press the button
//document.getElementById("input1").addEventListener("keydown", function (e) {
//    let char = e.which ? e.which : e.keyCode;
//    if (char >= 97 && char <= 127
//        || char >= 65 && char <= 90
//        || char == 8
//        || char >= 96 && char <= 105) {
//        return true;
//    } else {
//        e.preventDefault();
//        return false;
//    }
//});


//function isAlphaKey() {
//    // assign a value to character
//    //value assigned will be evt.which or evt.KeyCode
//    //if(evt.which)== true use evt.which else evt.KeyCode
//    var character = evt.which;

//    // i will allow what you types into the text box if its either a-z or A-Z
//    if (character > 97 && character < 122 || character >= 65 && character <= 90 || character == 8) {
//        return true;
//    }
//    else {
//        return false;
//    }

//}
////need onkeypress="()" on the input field


////first wire up an event listener that listens for the onkeypress event checks for valid input type i.e. numbers in this case. 

//document.getElementById("textTacoIn").addEventListener("keydown", function () {

//});




