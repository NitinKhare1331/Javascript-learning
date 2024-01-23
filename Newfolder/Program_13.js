/*JavaScript Program to Find Sum of Natural Numbers using Recursion? */

function naturalNumSum(n){
    if(n!=0){
        return (n + naturalNumSum(n-1))
    }
    else{
        return n;
    }
}
console.log(naturalNumSum(6));