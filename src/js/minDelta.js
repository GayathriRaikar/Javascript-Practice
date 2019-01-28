let matrix = [];
for(var i = 0 ; i < 10 ; i++){
    let arr = [];
    matrix.push(arr);
    for(let j = 0; j < 10; j++){
        arr.push(i*10 + j);
    }
}
console.log(matrix);

function findKth(k, matrix){
    if(k <= 0 || k >matrix.length * matrix.length){
        return null;
    }
    let startEdge = matrix.length;
    let index = 0;
    while(k > ((startEdge * 4) - 4)){
        k -= ((startEdge * 4) - 4);
        index++;
        startEdge -= 2;
    }
    return findOnBorder(matrix, k, index, startEdge);
}

function findOnBorder(matrix, k, startPoint, edgeLength){
    console.log('border')
    k--;
    if(k < edgeLength - 1){
        // top part
        return matrix[ startPoint][startPoint + k ];
    }
    k -= edgeLength - 1;
    if(k < edgeLength - 1){
        // right part
        return matrix[startPoint + k ][startPoint + edgeLength - 1 ];
    }
    k -= edgeLength - 1;

    if(k < edgeLength - 1){
        // bottom

        return matrix[ startPoint + edgeLength - 1 ][startPoint + edgeLength - 1 - k ];
    }
    // left side
    k -= edgeLength - 1;
    return matrix[ startPoint + edgeLength - 1  - k ][startPoint ];
}

console.log(findKth(37, matrix));
// print 11
console.log(findKth(100, matrix));
// print 54
console.log(findKth(50, matrix));
// print 78
console.log(findKth(64, matrix));
// print 21
console.log(findKth(65, matrix));