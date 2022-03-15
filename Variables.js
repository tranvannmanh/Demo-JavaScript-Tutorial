/**
 * VARIABLES
 * Primaritive datatypes:
 * @Strings
 * @Numbers 
 * @Boolean True/False value
 * 
 * Trivial datatypes:
 * @null
 * @undefined
 * 
 * Declare a variable
 * @var. for global variable
 * @let for block scope and cannot redeclaring in same block
 * @const. for unchangable value of variables
 */

// VD: let and var variable
var num1 = 5;
console.log(num1);
{
    let num1 = 10;
    // console.log(num2);
    console.log(num1);
}
console.log(num1);


/**
 * @const. must be assign a value when it's declared
 * When use const? new array, new object, function
 * 
 * Can't reassign value of a const variable, but you can change
 * the elements of array, properties of object.
 */
// VD:
const MAX = 1000;   // correct

// const PI;
// PI = 3.1415 //=> incorrect

const cat ={type: 'animal', color:'Yellow', say: 'meow meow'}
cat.color = 'black and white'; // correct
// cat = { type: 'Kind of what is', color: 'black', say: 'go go' }; //error




/**
 * HOISTING (use the variable before it's declared)
 * 
 * vd:
 */
score = 94;
var score;
console.log(score);
/**
 * const before it is declare, code not run
 * let before it is declared, error
 * VD:
 */
// myName = 'Manh';
// let myName; // ReferenceError
// console.log(myName);

// MIN = -Infinity;
// const MIN; // code not run, syntax error
// console.log(MIN);


/**
 * NULL vs UNDEFINED
 */
let vars;
console.log(vars);//undefined
console.log(typeof (vars)); //undefined

vars = null; // must assign null to variable
console.log(vars); // null 
console.log(typeof (vars));//object

const sayhi = function (person) {
    console.log('Hello, ' + person);
}
console.log(typeof sayhi);