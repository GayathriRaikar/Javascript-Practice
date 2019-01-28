var common = function(str1,str2) {
  var dict = {};
 
  for(var i=0; i < str1.length; i++) {
    dict[str1[i]] = 1;
  }
 
  var commonChars =[]; // this is optional if space is not an issue
  for(var i=0; i < str2.length; i++) {
    if( dict[str2[i]] == 1) {
      commonChars.push(str2[i]); // this is optional we can simply print
    }
  }
  
  dict = commonChars.join(""); //o(n)
  return dict;
}

console.log(common("gaya","gaa"));