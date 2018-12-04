function isOddOrEven() {
var number = parseFloat(document.getElementById("num1").value); 
  if (number%2 == 0) {
    document.getElementById("int").innerHTML = number + ' is an Even number'; 
  } else if (number%2 == 1 || number%2 == -1 ) {
    document.getElementById("int").innerHTML = number + ' is an Odd number';
  } else {
    document.getElementById("int").innerHTML = number + ' is a floating number';
  }
}