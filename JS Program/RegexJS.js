/**
 * \w : character like a-z, A-Z, 0-9, underscore'_'.
 * \W : stand for non-character .
 * \d : digit 0-9
 * \D : non-digit
 * \s : find a whitespace charater
 * \S : non-whitespace character
 * \b : begining of word like \bHi, ending of word Hi\b
 * \B : word that's not begining or end
 * \0 : find a NULL character
 * \n : new line character
 * \f : form feed character 
 * \t : finding tab character
 * n+ : string that contains at lease one character vd: /\w+/ => have at lease one character
 * n* : charater that's followed zero or more 'n' character :  
 * n? : string that contains zero or more 'n' character
 * n{x}: sequences that contains 'n' x times
 * n{x, y}: find substring that contain from x to y specified substring 'n'
 * n$ : a string that ends with substring 'n'
 * ^n : string that starts with substring 'n'
 * ?=n: string that's follow by a specified string 'n'
 * ?!n: string that's not follow by a specified string 'n'
 */

const demoString = '7528a494-4530'; 
// const regular = /4530$/; // end with '4540' => true
// const regular = /^7528/; // start with '7528' => true
// const regular = /1{1-5}/; //contain character '1' from once two five times => false
// const regular = /\d/; // digit 0-9 => true
const regular = /!_/; // contain no underscore '_' character.
console.log(regular.test(demoString));

// const emailRegex = /^[\w+]*[.\w+\d*]{1,2}[\@?=\w]{1}[\.\w]{1,2}$/;
// const emailDemo = 'manh.tranvann0901@gmail.com';
console.log(emailRegex.test(emailDemo));