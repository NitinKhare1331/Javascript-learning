/*How to find the sum of all elements of a given array in JavaScript? */

let a = [1,2,3,4,5,112];
let sum = 0;
// let len_arr = a.length
for(let i = 0; i < a.length ;i++){
    sum += a[i];
}
console.log(sum);

/*Alternate */

a = [1,2,3,4,5,110];
let new_sum = 0;

a.forEach((x)=>{
    new_sum += x
});
console.log(new_sum);

/*Alternate */

a = [1,2,3,4,5,110];
console.log(a.reduce((a,b)=>a+b));

