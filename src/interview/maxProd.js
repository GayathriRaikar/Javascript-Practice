let maxProd = function(array) {
  
  function sortInt(a, b) {
   return a - b 
  };
  array = array.sort(sortInt);
  let product1 = 1;
  let product2 = 1;

  for (let i = array.length-1; i>array.length-4; i--) {
    product1 = product1*array[i];
  }
  product2 = array[0]*array[1]*array[array.length-1];
  if (product1>product2) return product1;
  else return product2;

}
console.log(maxProd([-1, 7, 29, 30, 5, -70]));