let isAnagram = function (str1,str2) {
  /* str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  if ( str1 == str2 ) {
    return true;
  } else return false;

}
console.log(anagrams("Gayat","tyaga")); */

str1 = str1.toLowerCase().split('');
str2 = str2.toLowerCase().split('');

  let dict = {};
  str1.forEach( elem => {
    if ( !(elem in dict)) {
      dict[elem] = 1;
    } else {
      dict[elem] = dict[elem] + 1;
    }
  });
  str2.forEach(elem => {
    if(dict[elem] == 1) {
      delete dict[elem];
    } else if(dict[elem] > 1) {
      dict[elem]--;
    }
  });

  return Object.keys(dict).length == 0 ;

  }
  console.log(isAnagram("gayat","tgaya"));