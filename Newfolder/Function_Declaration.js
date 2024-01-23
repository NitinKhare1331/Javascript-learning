/*
Function declartion in js is declared as
function functionName(parameters){
    //code block;
    return xyz;
}
calling a function functionName(Arguments);

*Function declaration always starts with function keyword.
*Note=> If we do not return anything inside a function then function always return undefined.
*/

function Square(n){
    let result = n*n;
    return result;
}
console.log(Square(4));