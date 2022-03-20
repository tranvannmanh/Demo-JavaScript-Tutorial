/**
 * @funciton keyword to declare a function
 * flollow by a name and next to ().
 * function name includes letters, digits, underscores, dollar signs
 * a function may inlude parameters separated by ',', parameters can be a value, function,... va
 * a function is defined by a block of code inside {}
 */
// VD
var param1 = 2;
var param2 = 10;

function myFunction(param1, param2) {
    /**
     * @param1 first parameter
     * @param2 second parameter
     * behave as local variables (not change when outside the function)
     */
    //code to be executed 
    var iterator = 5;
    for (let index = 0; index < iterator; index++) {
        console.log(param1+=param2);
    }
}

// myFunction(param1, 5);
// console.log(param1) // 2


/**
 * Function returns.
 * When funtion reach 'return' statement, it'll stop
 * and often return a product or just return
 */

param1 = 10;
param2 = 20;
function multiply(param1, param2) {
    return param1 * param2;
}
//OR
const mult = function (param1, param2) { //Anonymous function
    param1 *= param2;
    return param1;
}

var result = multiply(param1, param2);
var result1 = mult(param1, param2);
console.log(result); //200
console.log(result1);
console.log(param1 * param2);


/**
 * Arrow function
 * short function syntax
 * VD: ArrowFunctions = (param1, param2, ...) => {}
 */
const multi = (param1, param2) => {
    return param1 * param2; 
}

//OR const multi = (param1, param2) => param1 * param2 (only one statement in the block)