//--------------FUNCTIONS & OBJECTS TUTORIAL----------------
function toCelsius(fahrenheit) {
  var person = { firstName:"Gayathri", lastName: "Raikar", age: 27, eyeColor: "brown", isGirl: true };
  var car = ["Audi", "BMW", "Golf", "Aston Martin", "Jaguar"];
  var x;
  var num = 27;
  var str = "Gayathri";

  console.log(typeof(person));
  console.log(typeof(car)); // array is an object in js
  console.log(typeof(x)); //undefined 
  console.log(typeof (function toCelsius() {}) );
  console.log(typeof(null)); // null is an object in Javascript
  console.log(typeof(num));
  console.log(typeof(str));
  console.log(typeof(car[0]));
  console.log(typeof(person.age));
  console.log(typeof(person.isGirl));
  console.log(person["firstName"]);
  var person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {

      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person1.fullName());
   return (fahrenheit - 32 ) * 5/9 ;
}
var res= toCelsius(13);
var text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text);

//----------------------Events----------------------------
/*Event	        Description
onchange	    An HTML element has been changed
onclick	      The user clicks an HTML element
onmouseover	  The user moves the mouse over an HTML element
onmouseout	  The user moves the mouse away from an HTML element
onkeydown	    The user pushes a keyboard key
onload	      The browser has finished loading the page */

//----------------------Strings----------------------------
var sentence = "Gaurav\'s my darling husband"
console.log(sentence);
console.log(sentence.length);
var res = sentence.indexOf("darling");
console.log(res);
var res1 = sentence.search("darling");
console.log(res1);
var res2 = sentence.slice(8,18);
console.log(res2);
var res3 = sentence.slice(-18,-15);
console.log(res3);
var res4 = sentence.slice(8);
console.log(res4);
var res5 = sentence.substring(8,18);
console.log(res5);
var res6 = sentence.substr(8,18);
console.log(res6);
var res7 = sentence.substring(8);
console.log(res7);
var res8 = sentence.replace("darling","sweetheart");
console.log(res8);
var res9 = sentence.toUpperCase();
console.log(res9);
var res10 = sentence.toLowerCase();
console.log(res10);

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(4));

 function fib(n){
  let arr = [0, 1];
  for (let i = 2; i <= n; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr;
}
console.log(fib(4));

function fibonacci(n){
  if(n != 0) {
    var arr = [0,1];
    for (let i = 2; i<=n; i++) {
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
  } else {
  var arr =[0];
  return arr;
  }
}
console.log(fibonacci(6));

function check_Palindrome(str_entry){
  // Change the string into lower case and remove  all non-alphanumeric characters
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
  // Check whether the string is empty or not
    if(cstr==="") {
      console.log("Nothing found!");
      return false;
    }
  // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
      ccount = (cstr.length) / 2;
    } else {
  // If the length of the string is 1 then it becomes a palindrome
      if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
      } else {
  // If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
      }
    }
  // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
  // Compare characters and drop them if they do not match 
      if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("Entry is not a palindrome.");
        return false;
      }
    }
    console.log("The entry is a palindrome.");
    return true;
  }

  check_Palindrome("e1y1e");



