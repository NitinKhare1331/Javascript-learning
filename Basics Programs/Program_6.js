/*JavaScript Program to Find the Area of Triangle? */

let side1 = 3;
let side2 = 4;
let side3 = 5;

let s = (side1 + side2 + side3)/2;
let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`Area of triangle with sides ${side1},${side2},${side3} is ${area} sq units.`);