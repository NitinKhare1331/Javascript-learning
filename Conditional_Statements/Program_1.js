/*Write a program to print series of numbers between two given numbers? */

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
