
/*

Example variables


*/

let firstName = 'Todd'
let age = 25
let str = 'Hello javaScript students!'
let str2 = '       hello!       '

console.log(`Hello ${firstName}. You are ${age} today`)

// .trim  bosluklari alir
let str3 = '  Hello!    '
console.log(str3.trim())
//substring()

let text = "Hello world!";
let result = text.substring(1, 4);
console.log(result)

//includes() Method
let text2 = "Hello world, welcome to the universe.";
let result2 = text2.includes("world");
console.log(result2)

//indexof() method
let text3 = "Hello world, welcome to the universe.";
let result3 = text.indexOf("welcome");
console.log(result3)

// .split() method
let text4 = "How are you doing today?";
const myArray = text4.split(" ");
console.log(myArray)




