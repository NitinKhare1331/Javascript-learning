/*How to trim a string at beginning or ending in JavaScript? */

let str = " Nitin khare";
console.log(str);
let trim_strt = str.trimStart();
console.log(trim_strt);
console.log();

/*Alternate */

str = "Nitin khare ";
console.log(str);
let trim_end = str.trimEnd();
console.log(trim_end);
console.log();

/*Alternate */

str = " Nitin Khare ";
console.log(str);
let trim = str.trim();
console.log(trim);
