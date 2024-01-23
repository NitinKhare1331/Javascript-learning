/*Add new elements at the beginning of an array using JavaScript?*/

Arr = [2,3,4,5,"Nitin","Shivam","Shashank",10];
let res = Arr.unshift("Shiva")
console.log(Arr);

/*Alternate */

Arr = [2,3,4,5,"Nitin","Shivam","Shashank",10];
res = Arr.splice(0,0,"Shiv")
console.log(Arr);
