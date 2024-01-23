const arr = [{Name:'Apple'},{Name:'Apple'},{Name:'Apple'},{Name:'Apple'},{Name:'Apple'}]
const a = [1,2,3,4,5,6,7,8,9];
let r = a.some((x)=>x>2);
console.log(r);
let res = arr.some((x)=>!x);
console.log(res);