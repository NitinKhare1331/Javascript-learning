let arr = [1,1,1,2,3,4,4,4,5,5,6];
function remove(arr){
    return arr.filter((i,idx) => arr.indexOf(i) === idx)
}

console.log(remove(arr));


// let arr = ["apple", "mango", "apple",
// 		"orange", "mango", "mango"];

// function removeDuplicates(arr) {
// 	return arr.filter((item,
// 		index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));
