/*How to splice an array without mutating the original Array? */

arr = [1,2,3,4,"Nitin","Shashank","Shivam"];
let spliced_array = arr.splice(4,3);
console.log(spliced_array);
console.log(arr);