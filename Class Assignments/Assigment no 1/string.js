let str="   ali is too quick  ";
let str2="but ali is too lazy"
//charAt function is used to check value at specific index
console.log(str.charAt(3))
// charCodeAt function is used to give the code value of specific index value
console.log(str.charCodeAt(5))
//concat function is used to join different string
console.log(str.concat("but ali is too lazy "))
console.log(str.concat(" ",str2))
//includes function is used to check specific value present in string or not
console.log(str.includes("hello"))
//check string end with specific  value or not
console.log(str.endsWith("quick"))
//fetch the index of specific value
console.log(str.indexOf("quick"))
//it give the last index of give value
console.log(str.lastIndexOf("n"))
//it repeat the string with given number.here 4 time string repeated
console.log(str.repeat(4))
//it replace Dark value with Black in given str string
console.log(str.replace("ali","Black"))
//it check at which index given value present 
console.log(str.search("quick"))
//it give the portion of string from given index to last index
console.log(str.slice(4))
//it convert the given  string into array
console.log(str.split())
//it check's  whether the string start with given value or not
console.log(str.startsWith("quick"))
//it give the portion of string from range index,here 5,6 index value fetch
console.log(str.substring(4,7))
//convert into lowercase string
console.log(str.toLowerCase())
//convert into uppercase string
console.log(str.toUpperCase())
//it removes all spaces from start and end of the string
console.log(str.trim())
//it returns the primitive value of the specified object.
console.log(str.valueOf())
//it  returns a string representation of a string
console.log(str.toString())