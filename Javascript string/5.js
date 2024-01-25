/*How to check if a string “StartsWith” another string in JavaScript? */

let str = 'Geeks for geeks';
// console.log(str.startsWith('geeks'));
// console.log(str.startsWith('Geeks'));
// console.log(str.startsWith('for',6));

function strtWth(str){
    if(str.startsWith('Geeks')){
        result = true;
    }
    else {
        result = false;
    }
    console.log(result);
}
strtWth(str);