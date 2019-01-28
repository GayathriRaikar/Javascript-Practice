var reverseString = function(str) {
  str = str.split('');
  var resultStr = "";
  for (let i = str.length; i>=0; i-=3){
    result = str.splice(0,3).reverse().join('');
    resultStr = resultStr + result;
    }
    return resultStr;
  }
  console.log(reverseString("gayathriRaikar"));

/*function reverseString(str) {
  if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return console.log(reverseString(str.substr(1)) + str.charAt(0));
}
reverseString("gayathri");*/