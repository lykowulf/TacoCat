//reverse a string/Palindrome

//document.getElementById("palindrome").addEventListener("click", function () {
//    palindrome();
//});

function palindrome() {
    let input = document.getElementById("input1").value;
    let reverse = ""

    for (i = 0; i <= input.length - 1; i--) {
        reverse += input.charAt(i);
    }
    if (input == reverse) {
        alert("is Palindrome")
    } else {
        alert("try again")
    }
    document.getElementById("flipResult").innerHTML = reverse;
}



//   /[\W_]/g
//document.getElementById("flippy").addEventListener("click", function () {

//})

//document.getElementById("reverse the out put").innerHTML = reverse
