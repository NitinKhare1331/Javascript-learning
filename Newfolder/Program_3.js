/*Write a program to find sum of numbers in array using spread operator? */

function addAny(...a){
    let sum = 0;
    if(a.length == 0){
        return 0;
    }
    else {
        for(let i = 0; i < a.length; i++){
            sum += a[i];
        }
    }
    return sum;
}
console.log(addAny(1,2,3,4,5));

const a = 1;
const b = 30;
let output = ""
if (a < b) {
    for (let i = a; i <= b ; i++) {
        output = output + i
        if (i<b){
            output = output + ','
        }      
    }console.log(output);
}else{
    console.log("please enter valid numbers");
}