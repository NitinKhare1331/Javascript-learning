/*JavaScript Program to Compare Strings? */

let str1 = "Nitin khare";
let str2 = "Nitin khare";
function string_compare(){
    let res = str1.localeCompare(str2);
    console.log(res);
    if(res === 0){
        console.log('Strings are same.');
    }
    else{
        console.log('Strings are not same.');
    }
}
string_compare();
