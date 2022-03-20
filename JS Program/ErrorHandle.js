/**
 * Error Object
 * properties: name, message
 * name values: RangeError, SyntaxError, ...
 */

/**
 * try catch 
 * to catch and handle the error
 * try {
 *      // code block to be tested
 * } catch (error){
 *      // handle error here
 * } finally {
 *      // code block always to be executed
 * }
 */

try {
    // console.log('Nothing wrongs...'); // succesful to print out the message
    consoleLog('Nothing wrongs...');    // jump to catch block
} catch (error) {
    console.log(error.message); 
} finally {
    console.log('Finally done...');
}

/**
 * Custome error handler
 * throw error
 */
const car = ['Royce Roll', 'Lamborghini', 'Bugatti'];
// if (car.length > 0) throw 'array is not empty...';
const emptyCar = [];
// const index = emptyCar.pop();
const index = emptyCar.pop()
if (!index)
    throw 'array is empty...';
else
    console.log(index);