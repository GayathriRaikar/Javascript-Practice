let sortArray = function (){
  let arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	let arr2 = [ 6, 7, 8, 9 ];
	let arr3 = [];
	let i = 0, j = 0, k = 0;
		
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				arr3[k] = arr1[i];
				++i;
				++k;
			} else if (arr2[j] < arr1[i]) {
				arr3[k] = arr2[j];
				++j;
				++k;
			} else {
				arr3[k] = arr1[i];
				++i;
				++j;
				++k;

			}
		}
		if (j < arr2.length) {
			while (j < arr2.length) {
				arr3[k] = arr2[j];
				++j;
				++k;
			}
		} else {
			while (i < arr1.length) {
				arr3[k] = arr1[i];
				++i;
				++k;
			}
    }
    return arr3;
}

console.log(sortArray());
