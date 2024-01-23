/*JavaScript Program for any Armstrong Number? */

let n = 153;
let convertToString = n.toString();
let numberOfDigits = convertToString.length;
let temp = n;
let sum = 0;
while(temp>0){
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = Math.floor(temp/10);
}
if(sum == n){
    console.log(`${n} is armstrong number.`);
}
else{
    console.log(`${n} is not armstrong number.`);
}