/*JavaScript Program to Calculate nPr (Permutations)? */

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}
function permutation(n,r){
    if(n<r){
        return -1;
    }
    return (factorial(n)/factorial(n-r));
}
console.log("1 P 4 is "+permutation(1,4));
console.log("13 P 2 is "+permutation(13,2));