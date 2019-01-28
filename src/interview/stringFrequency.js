var a = "bbzzzzzbbbbccc";
a = a.split('');
var dict = {};
var result = "";

a.forEach( elem => {
  if( !(elem in dict) ) {
    dict[elem]= 1;
  } else {
    dict[elem]= dict[elem] + 1;
  }
})

a.forEach( elem => {
  if (elem in dict) {
    result = result + (elem) + (dict[elem]);
    delete dict[elem];
  }
});
console.log(result);