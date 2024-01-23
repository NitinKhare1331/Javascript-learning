/*Write  program to find sum of numbers in array using args */

function addAnyNum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    } 
    return sum;
}
console.log(addAnyNum(1,2,3,4,5));