let authorA = function() {
  let a = {"java":"John","C#":"Rob","javascript":"John", "ruby":"John"};
  let author = {};
  Object.entries(a).forEach(([key,value]) => {
    if (!(value in author)) {
      author[value] = [key] ;
    } else {
      author[value] = author[value].concat([key]) ;
    }
  });
  return author;
}
console.log(authorA());