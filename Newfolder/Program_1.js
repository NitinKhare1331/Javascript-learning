/*Write a program to calculate factorial of a number using function(recursion)? */

function f(n) {
    if (n==0) return 1;
    let result = n * f(n-1);
    return result;
}
console.log(f(5));
console.log(f(10));
console.log(f(20));