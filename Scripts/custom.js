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
