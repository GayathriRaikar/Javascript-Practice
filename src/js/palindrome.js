var isPalindrome = function (str) {
  var str = document.getElementById("palin").value;

  if (str === str.split('').reverse().join('') || str.length === 1) {
    document.getElementById("result").innerHTML = str + " is a palindrome";
  } else {
    document.getElementById("result").innerHTML = str + " is not a palindrome";
  }
}


