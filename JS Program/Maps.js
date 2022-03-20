/**
 * new Map(): hold pair keys and it's value
 * create new Maps object
 * VD:
 */
const fruits = new Map(
    [
        ['apple', 500],
        ['dragon fruit', 1000],
        ['mango', 2000]
    ]
);

console.log(fruits);

for (const pair of fruits.entries()) {
    console.log(pair);
}

// add elements to fruits
fruits.set('Pepper', 5000);
console.log(fruits);

// get quantities of apple
console.log(fruits.get('apple'));

