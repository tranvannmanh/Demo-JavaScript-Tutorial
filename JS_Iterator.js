/**
 * For In loop
 * each iteration return key or index
 */
const arr = ['some', 'dfsd', 'guwi', 'dfjksdhfkadkkg'];
const person = { name: "manh", age: "21", phone: "0336029751" };

for (element in arr) {
    //element return index of each element in arr
    console.log(arr[element]);
}

/**
 * forEach loop
 * call funtion for each array element
 */
const consoleLog = (value, index, arr) => {
    console.log(arr);
}
arr.forEach(consoleLog);


/**
 * for of
 * for (variable of iterable){
 *      // code block to be executed
 *      // each variable return value of iterable
 * } 
 */

for (const value of arr) {
    console.log(value);
}

//loop over a string
const stringDemo = 'something here';
for (const iterator of stringDemo) {
    console.log(iterator); // characters in the string
}


/**
 * While Loop
 * while (condition) {
 *  //code block to be execute
 * }
 */
const stringLength = stringDemo.length;
var i = 0;
while (i < stringLength) {
    console.log(i);
    i++;
}

/**
 * do {
 *  //code block to be executed
 * } while(condition)
 * 
 * do while loop execute code block inside at lease once
 */
do {
    console.log(stringDemo);
    i++;
} while (i < stringLength * 2);