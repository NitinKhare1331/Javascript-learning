/*Get the first and last item in an array using JavaScript? */

a = [1,2,3,4,5,6,7,8,9,10];
let first = a.shift();
console.log("First element is ",first);
let last = a.pop();
console.log("Last element is ",last);

/*Alternate */

a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.slice(0,1));
console.log(a.slice(-1));

/*Alternate */

let s = ["Geeks", "for", "geeks", "computer", "science"];
let f = s[0]
console.log("First element is ",f);
let l = s[s.length-1];
console.log("Last element is "+l);
