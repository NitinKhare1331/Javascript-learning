/*Remove elements from a JavaScript Array? */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let spliced = a.splice(5,1);
console.log(spliced);
console.log(a);

/*Alternate */
/*array.shift() removes first element from array. */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let first = a.shift();
console.log(a);

/*Alterate */
/*array.pop() removes last element from the array */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let last = a.pop();
console.log(a);

/*Alternate */
/*delete removes element by its index from array. */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let deleted = delete a[6];
console.log(a);