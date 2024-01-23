/*How to replace an item from an array in JavaScript? */

let arr = ["Jan","Feb","March","May","June","July","Oct","Nov","Dec"]
arr.splice(3,0,"April")
arr.splice(7,0,"Aug")
arr.splice(8,0,"Sept")
console.log(arr);
let new_arr = [
    'Jan',   'Feb',
    'May', 'April',
    'May',   'June',
    'July',  'AUG',
    'Sept',  'Oct',
    'Nov',   'Dec'
]
new_arr.splice(2,1,"March")
new_arr.splice(7,1,"Aug")
console.log(new_arr);