// declare a string datatype variable
const string1 = "Something here";
//or
const string2 = 'Something here here';
//or define a string as object
const string3 = new String("SOMETHING Here");

/**
 * String.length
 * @length return the length of a string
 */
console.log(string1.length) // 14


/**
 * Extracting String
 * 
 * slice(startIndex, endIndex) (start, end is two index in string)
 * substring(startIndex, endIndex) (not accept nagative index)
 * substr(startIndex, lengthOfSubstring)
 */
//VD:
console.log(string1.slice(1, 6));
console.log(string2.substring(2, 7));
console.log(string3.substr(3, 10));

// charAt() return character of specified index
console.log(string1.charAt(2));

// concat() combine 2 two string and return new string
console.log(string1.concat(string2));

// indexOf() return first index of the matched string or -1 if not found
console.log(string1.indexOf('here'));

/**
 * replace() replace a specified value with another value 
 * use /g for replace all matched value in a string)
 * use /i for replace case insensitive
 */
console.log(string2.replace(/here/g, 'there'));
console.log(string3.replace(/here/i, 'There'));

/**
 * toUpperCase() convert string to upper case
 * toLowerCase() convert string to lower case
 */
console.log(string1.toUpperCase());
console.log(string3.toLowerCase());

// trim() to remove whitespace from both side of string
var demoString = '   demo string   ';
console.log(demoString.trim());


