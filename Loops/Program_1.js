/*Write a programme to calculate factorial of a number using loops? */

let n = 3;
let fact = 1;
for(let i = 1; i <= n; i++){
    fact*=i;
}
console.log(`Factorial of ${n} is ${fact}`);