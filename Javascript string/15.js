/*How to get the number of occurrences of each letter in specified string in JavaScript? */

function count_occurence(str){
    if(str.length == 0){
        console.log('Invalid string');
    }
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i] == str[j] && i > j){
                break;
            }
            if(str[i]==str[j]){
            count++;
        }
        }
        if(count>0){
            console.log(`${str[i]} occured ${count} times.`);
        }
    }
}
let str = 'Nitin Khare';
count_occurence(str);