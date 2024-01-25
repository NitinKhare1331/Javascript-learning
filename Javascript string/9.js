/*How to get the last character of a string in JavaScript?*/

let str = "Geeks for Geeks";
let res = str.charAt(str.length -1);
console.log(res);
console.log();

/*Alternate */

str = "Geeks for Geeks";
res = str.slice(-1);
console.log(res);
console.log();

/*Alternate */

str = "Geeks for Geeks";
res = str.at(-1);
console.log(res);
console.log();

/*Alternate */

str = "Geeks for Geeks";
res = str.match(/.$/g);
console.log(res);
console.log();
