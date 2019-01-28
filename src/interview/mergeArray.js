//merge two sorted arrays
var mergeArray = function(a,b) {

  var answer = [];
  var i = 0, j = 0, k = 0;

  while (i < a.length && j < b.length)  {
       answer[k++] = a[i] < b[j] ? a[i++] :  b[j++]; }

  while (i < a.length) {
      answer[k++] = a[i++]; }

  while (j < b.length) {   
      answer[k++] = b[j++]; }
      
  return answer;
  
}

console.log(mergeArray([0,1,4,],[2,5,9]));