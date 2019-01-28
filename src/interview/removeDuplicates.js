
function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}

/*let removeDuplicate = function(array) {
  let dict = {};
  let result = []; 
    array.forEach(elem => {
      if ( !(elem in dict) ) {
        dict[elem] = 1;
      } 
      else {
        dict[elem] = dict[elem]+1;
      }
    });
    for ( let i = 0; i<array.length; i++) {
      if(dict[array[i]] == 1) {
        result = result + array[i];
      }
    }

      
  return result;
}*/

console.log(uniqueArray([2,1,2,3,4]));


/* let removeDuplicate = function (array) {
  let dict = {};
  let unique = [];

  array.forEach( elem => {
    if(!(elem in dict)) {
      dict[elem] = 1;
      unique.push(elem);
    }
  });
  return unique;

}

console.log(removeDuplicate([3,1,2,1,3])); */