// Array is a variable that holds more than one value
// VD:
const car = ['Royce Roll', 'Lamborghini', 'McLaren', 'Bugatti'];
console.log(car);
// assign an element in array with new value
car[0] = 'Something';
console.log(car);
// type of array is an object
console.log(typeof (car)); //object



// SOME ARRAY METHODS
console.log(car.length); //check number of elements in car array => 4

// toString() converts an array to a string of (comma separated) array values.
console.log(car.toString());

/**
 * join()
 * It behaves just like toString(), but in addition you can specify the separator:
 */
console.log(car.join(' - '))// separate by '-'

/**
 * pop() to remove last element from array
 * and push() add an element to last of array
 */
car.pop() // remove Bugatti element
console.log(car);
car.push('new car'); //add new element 'new car' to the end of array
console.log(car);


/**
 * shift() remove first element from array and shift all element to lower index
 * 
 */
car.shift();
console.log(car);

/**
 * Combine two array
 * concat() return new array with elements exist in both array
 */
const person = ['John', 'Jessica', 'Max', 'Alex'];
console.log(car.concat(person));

/**
 * slice out a part of array
 * slice(start, end) => new array from source array
 */
console.log(person.slice(1, 3));
// console.log(person.slice(1));
// console.log(person);


/**
 * Sort array
 * sort() sorts an array alphabetically
 */
console.log(person.sort());
// to sort numeric 
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a,b)=>a-b)); // sort increase