//reverse a string/Palindrome

//document.getElementById("palindrome").addEventListener("click", function () {
//    palindrome();
//});

//function palindrome() {
//    let input = document.getElementById("input1").value;
//    let reverse = ""
//    let cutWord = input.split("").reverse().join("");


//    for (i = input; i <= input.length - 1; i--) {
//        reverse += input.charAt(i);
//        document.getElementById("flipResult").innerHTML = cutWord;
//    }
//    if (input == reverse) {
//        alert("is Palindrome")
//    }
//    else {
//        alert("try again")
//    }
//}



//   /[\W_]/g
//document.getElementById("flippy").addEventListener("click", function () {

//})

//document.getElementById("reverse the out put").innerHTML = reverse

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





//button eventlistener for tacocat
//document.getElementById("btnTaco").addEventListener("click", function () {
//}
//);


//user validation 
//press the button

function isAlphaKey() {
    // assign a value to character
    //value assigned will be evt.which or evt.KeyCode
    //if(evt.which)== true use evt.which else evt.KeyCode
    var character = evt.which;

    // i will allow what you types into the text box if its either a-z or A-Z
    if (character > 97 && character < 122 || character >= 65 && character <= 90 || character == 8) {
        return true;
    }
    else {
        return false;
    }

}
//need onkeypress="()" on the input field


//first wire up an event listener that listens for the onkeypress event checks for valid input type i.e. numbers in this case. 

document.getElementById("textTacoIn").addEventListener("keydown", function () {

});
