/*Reverse an array in JavaScript? */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let reversed = a.reverse();
console.log(reversed);

/*Alternate */
/*Using forEach */

a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];
let reversed_array = []
a.forEach((element) => {
    reversed_array.unshift(element);
});
console.log(reversed_array);

