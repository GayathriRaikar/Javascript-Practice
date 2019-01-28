'use strict';
var moveZeroes = function(nums) {
  var i, temp;
  for (i = nums.length; i>=0; i--) {
      if (nums[i] === 0) {
          temp = nums.splice(i, 1);
          nums.push(temp[0]);
      }
  }
  return nums;
};
console.log(moveZeroes([0,3,0,8,9,3,0,0,0,2,55,0]));
