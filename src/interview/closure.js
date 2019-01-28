function add10() {
    let x = 0;
    function add() {
        x = x + 10;
        return x;
    }
    return add;
}

let t = add10();
/*

t = function add() {
        x = 0 + 10;
        return x;
    }
*/

console.log(t());
console.log(t());

/*
 function add() {
        x = 10 + 10;
        return x;
    }
*/


console.log(add10()())
/*
add10() = function add() {
        x = 0 + 10;
        return x;
    }
*/

console.log(add10()())

let array = [];
array.push("gayathri");
array.push("gaurav");

console.log(array);
//array.shift();
array.pop();
console.log(array);
