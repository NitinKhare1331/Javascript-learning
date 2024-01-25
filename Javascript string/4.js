/*How to replace all occurrences of a string in JavaScript? */

let str = 'Hi! I am Nitin';
let res = str.replace(/Hi/,'Hello');
console.log(res);

/*Alternate */

str = 'Hi! I am Nitin';
res = str.replaceAll('Nitin','Shashank');
console.log(res);