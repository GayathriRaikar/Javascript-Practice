let maxNumber = function(array) {
  /* if(array.length == 0) {
    return array;
  }
  function sorInteger (a,b) {
    return a-b;
  }
  aaary = array.sort(sorInteger);
  
  return array[array.length-1]; */

  let initial  = array[0];
  for (let i = 1; i<array.length; i++) {
   if( initial < array[i]) {
      initial = array[i];
    }
  }
  return initial;
}
console.log(maxNumber([4,5,2,3,1,10]));