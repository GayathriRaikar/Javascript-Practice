var noOfOccurances = function(num){
  var nums = [1,3,1,5,2,9,0,8,4,8,2,7,5,7,1,7,0,8,8,8,8,8,8];
  var dict = {};

  nums.forEach(elem => {
    if(!(elem in dict)) {
      dict[elem] = 1;
    } else { 
      dict[elem] = dict[elem]+1;
    }
  });
  Object.entries(dict).forEach(([key]) => {
    if(key == num) {
      console.log("Number of occurance of given number " +num+ " in an array is " +dict[key]);
    }
  });
}
noOfOccurances(8);

/* var countOccurance = function occurance(elements){
  //count = 0;
  let dict= {}; 
  elements.forEach (elem => {
    if(!(elem in dict)) {
      dict[elem] = 1;
    } else {
      dict[elem] = dict[elem]+1;
    }
  })
  return dict;
}
console.log(countOccurance(['ab','b','c','ab','f','e'])); */
