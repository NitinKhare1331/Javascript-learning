/*JavaScript Program to Check if a String Contains any Whitespace Characters? */

function whitespace(str){
    let regex = /\s/;
    return regex.test(str);
}
let str = 'Hi there, my name is Nitin Khare';
if(whitespace(str)){
    console.log(`There are whitespace character in the string.`);
}
else{
    console.log(`There are no whitespace character in the string.`);
}