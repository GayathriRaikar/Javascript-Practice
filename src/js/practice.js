let user = { 
  name: "John",
  age: 30
}
user.isAdmin=true;
console.log(user);
delete user.isAdmin;
console.log(user);
console.log(user["age"]);
let user1 = { name: "John", age: 30 };

console.log( "age" in user1 ); // true, user.age exists
console.log( "blabla" in user1 );

let user2 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user2) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user2[key] ); // John, 30, true
}


const user3 = { name: "John" };
user3.name="g";

let admin = user3;
admin.name="m";

console.log(user3);

let user4 = {
  23: 23
};
console.log(user4);


function makeUser(name, age) {
  return {
    name,
    age
    // ...other properties
  };
}

let user6 = makeUser("John", 30);
console.log(user6.name); // John

let user7 = { age: 30 };

//let key = "age";
console.log( "age" in user7 )

let user8 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user8) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user8[key] ); // John, 30, true
}

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  console.log(code); // 1, 41, 44, 49
  console.log(codes[code]);
}

const users = {
  name: "John"
};

users.age = 25;
users.add = 28;
 // (*)
console.log(users.name); // 25


let user10 = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user10) {
  clone[key] = user10[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

console.log( clone.name )


let user11 = {
    name: "Gayathri"
}

let perm1 = {canView:true};
let perm2 = {canEdit:false};

// copies all properties from permissions1 and permissions2 into user
Object.assign(user11,perm1,perm2)
console.log(user11);

let user12 = { name: "John" };

// overwrite name, add isAdmin
Object.assign(user12, { name: "Pete", isAdmin: true });
console.log(user12);

// now user = { name: "Pete", isAdmin: true }

let user13 = {
  name:"a",
  age: 34
}
let clone1 = Object.assign({},user13);
console.log(clone1);


let user14 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log( this.name ); // leads to an error
  }

};


let admin1 = user14;
user14 = null; // overwrite to make things obvious

admin1.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

let user15 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

console.log(user15.toString()); // toString -> {name: "John"}
console.log(+user15); // valueOf -> 1000
console.log(user15 + 500); // valueOf -> 1500

function User1(name) {
  this.name = name;
  this.a


  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

let john = new User1("John");
let john1 = new User1("John1");


john.sayHi(); // My name is: John
john1.sayHi();

class User {

 constructor(name) {
    this.name = name;
  } 
  constructor(name, add) {
      this.name = name;
      this.add = add;
    } 
  sayHi() {
    console.log("name is " + this.name);
    console.log("add is " + this.add);
  }

}
let user20 = new User("John");

user20.sayHi();

let user21 = new User("John1","gayathri");
user21.sayHi();