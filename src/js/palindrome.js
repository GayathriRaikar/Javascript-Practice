var isPalindrome = function (userValue) {
  var userValue = document.getElementById("palindromeText").value;
  var str = userValue.toLowerCase().replace(/[\W_]/g,'').toLowerCase();

  if (str === str.split('').reverse().join('') || str.length === 1) {
    document.getElementById("result").innerHTML = str + " is a palindrome";
  } else {
    document.getElementById("result").innerHTML = str + " is not a palindrome";
  }
}
