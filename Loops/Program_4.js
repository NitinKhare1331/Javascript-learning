/*JavaScript Program to Check for Palindrome Number? */

let n = "121";
let rev = 0;
let temp = n;
while(temp > 0){
    let remainder = temp % 10;
    rev = rev*10 + remainder;
    temp = Math.floor(temp/10);
}
if (n == rev) {
    console.log(`${n} is palindrome.`);
}
else{
    console.log(`${n} is not palindrome.`);
}


