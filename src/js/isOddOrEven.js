function isOddOrEven() {
var number = parseFloat(document.getElementById("num").value);
  if (number%2 == 0) {
    document.getElementById("result").innerHTML = number + ' is an Even number'; 
  } else if (number%2 == 1 || number%2 == -1 ) {
    document.getElementById("result").innerHTML = number + ' is an Odd number';
  } else {
    document.getElementById("result").innerHTML = number + ' is a floating number';
  }
}