// What typed is javascript? dynamic or static 

// Data Types : 
// 1. Primitive dataType : these are call by value. Those are
// 1. String : ex: 
const strValue = "varsha"
console.log(typeof strValue); // string
// 2. Number : ex: 
const numValue = 100
console.log(typeof numValue); // number
const isLoggedIn = false
console.log(typeof isLoggedIn); // boolean
// 4. Null : ex: 
const outSideTemp = null
console.log(typeof outSideTemp); // object
// 5. Undefined : 
let userEmail;
console.log(typeof userEmail); //undefined
// 6. Symbol : unique Value ex: const id = Symbol('123')
const id = Symbol('123')
console.log(typeof id); //symbol
const anotherId = Symbol('123')
console.log(id === anotherId);
// 7. BigInt : 
const bigNumber = 34215678902341135314521n
console.log(typeof bigNumber); // bigint

// 2. Reference or Non-Primitive DataTypes : these are call by reference. Those are
// 1. Arrays :
const heros = ["rose","migra","jasmin","marigold"];
console.log(typeof heros); // object
// 2. Objects :
let objectValue = {
    name : "Varsha",
    age : "27"
}
console.log(typeof objectValue); // object

// 3. Functions : syntax : function(){}
const myFunction = function(){
    console.log("Display");
}
console.log(typeof myFunction); // object function

// Notes : which type data can be kept and  how to access it , based on this there are 2 type
    // 1. Call-By-Value 2. Call-By-Reference
