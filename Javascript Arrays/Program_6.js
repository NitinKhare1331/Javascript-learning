/*How to insert an item into array at specific index in JavaScript ? */

let a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let index = 5;
let element = 100
a.splice(index,0,element);
console.log(a);