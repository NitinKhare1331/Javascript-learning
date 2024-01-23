/*Copy Array Items into Another Array in JavaScript? */

let array = [12,23,34,45,56,67,78,89];
let res = []
// let copied_Arr = [...array];
// console.log(copied_Arr);
// console.log(array.slice());
for(let i=0;i<array.length;i++){
    res.push(array[i])
}
console.log(res);