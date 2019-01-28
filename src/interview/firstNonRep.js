let nonRep = function(str) {
  str = str.toLowerCase().split('');
  let dict = {};
  //let result = [];

  str.forEach( elem =>  {
    if(!(elem in dict)) {
      dict[elem] = 1 ;
    } else {
      dict[elem] = dict[elem]+1;
    }
  });

  var result = null;
  /*while(result == null && i < str.length){
    if (dict[str[i]] == 1) {
      result = str[i];
    }
    i = i + 1;
  }*/

  for (let j =0; j < str.length && result == null; j++){
    if (dict[str[j]] == 1) {
      result = str[j]
    }
  }
  /*(Object.entries(dict).forEach(([key,value]) => {
    if (value == 1) {
      result = result+key;
    }
  });
  return result[0];*/
  return result;
  
}
console.log(nonRep("Saleforce is the best company to work for"));