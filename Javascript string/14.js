/*How to check whether a passed string is palindrome or not in JavaScript? */

function palindrome_str(str){
    let lw_str = str.toLowerCase();
    let new_str = lw_str.split('').reverse().join('');
    let res = lw_str.localeCompare(new_str);
    if(res == 0){
        console.log('String is palindrom.');
    }
    else{
        console.log('String is not palindrom.');
    }
}

let str = 'Nitin';
palindrome_str(str);
