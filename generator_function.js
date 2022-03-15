/**
 * 
 * Generator function
 * return Generator object (executed => save context and exit => resume)
 * delare a generator function
 * 
 */

function* generator(i) {
    yield i; // { value: 10, done: false}
    yield i + 10; // { value: 20, done: false}
    i += 20;
    yield i; // return {value: 30, done: true}
}

// const gen = generator(10);
// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next().value);

// console.log(generator(18).value); //undefined



// yield* => execute an itertable oject or another generator function
function* genTwo(param1) {
    yield* [1, 2, 5];
    // yield* param1 + param1; //error
    yield* generator(30);
}

const gen2 = genTwo(10);
console.log();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next()); //undefined