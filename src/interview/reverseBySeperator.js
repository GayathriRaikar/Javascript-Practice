var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");


function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
