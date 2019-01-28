let consecutive = function(array)  {
  let count = 0;
  let max = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] == 0) {
      count = 0;
    } else {
      count++;
    max = count > max ? count : max;
    }
  }
  return max;
}

console.log("count of consecutive 1's is "+consecutive([0,1,0,1,1,1,0]));