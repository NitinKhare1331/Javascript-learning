/*Remove Duplicate Elements from JavaScript Array? */

let arr = ["apple", "mango", "apple","orange", "mango", "mango","1",1,2,3,4];

function removeDuplicate(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(removeDuplicate(arr));

/*Alternate */
console.log();
arr = ["apple", "mango", "apple","orange", "mango", "mango",1,1,2,3,4];

let unique = [];
arr.forEach((item)=>{
    if(!unique.includes(item)){
        unique.push(item);
    }
})
console.log(unique);