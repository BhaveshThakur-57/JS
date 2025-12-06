
const name = "Bhavesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bhavesh-bc-com')

// console.log(gameName.__proto__);
console.log(gameName.at(1))
console.log(gameName.endsWith('o'));

console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.lastIndexOf('com'))
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.charAt(2).toUpperCase()) //method chaining

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)  // isme -value bhi le sakte
console.log(anotherString);

const newStringOne = "   bhavesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bhavesh.com/bhavesh%20thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('com'))

console.log(gameName.split('-'));
