/**
 * Callback
 * pass a function as argument to another function
 * call another function in a function
 * callback function run after other function finished
 */
const summ = (a, b, display) => {
    let result = a + b;
    display(result);
}

const resultDisplay = (result) => {
    console.log(result);
}

summ(3, 6, resultDisplay);