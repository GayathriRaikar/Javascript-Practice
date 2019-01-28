
let missingNum = function(array, upperBound, lowerBound) {
  let sumOfIntegers = 0;

  for (let i= 0; i<array.length; i++) {
    sumOfIntegers += array[i];
  }
  upperLimitSum = (upperBound * (upperBound+1)) / 2;
  lowerLimitSum = (lowerBound * (lowerBound-1)) / 2;

  theoroticalSum = upperLimitSum - lowerLimitSum;
  return theoroticalSum - sumOfIntegers;
}
console.log(missingNum([2,1,8,4,5,7,9,3],9,1));