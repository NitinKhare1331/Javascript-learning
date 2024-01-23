/*How to convert a number into array in JavaScript? */

let num = 5011964;
let my_arr = String(num).split("").map((num)=>{
    return Number(num);
})
console.log(my_arr);
