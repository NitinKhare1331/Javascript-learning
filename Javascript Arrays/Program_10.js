/*How to find if two arrays contain any common item in Javascript? */

let arr1 = [1,2,3,4,5,"a","b","g",10];
let arr2 = [10,2,31,42,5,"A","b","G",100];

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['k', 'x', 'z'];

function common_items(arr1,arr2){
    let len_arr1 = arr1.length;
    let len_arr2 = arr2.length;
    for(let i=0; i< len_arr1; i++){
        for(let j = 0; j <= len_arr2; j++){
            if(arr1[i]===arr2[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(common_items(arr1,arr2));
console.log(common_items(array1,array2));
