//determine if the word is a palindrome

function palindrome() {
    let inpuWord = document.getElementById("input1").value;
    let reverseWord = "";
    for (let loop = inpuWord.length - 1; loop >= 0; loop--) {
        reverseWord += inpuWord.charAt(loop);
    }
    //let palResult = inpuWord.split("").reverse().join("");
    if (inpuWord == reverseWord) {
        alert("you're correct!!")
    }
    else {
        alert("Wrong");
    }
    document.getElementById("flipResult").innerHTML = reverseWord;

}




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




