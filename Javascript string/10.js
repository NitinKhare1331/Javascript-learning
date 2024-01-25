/*How to convert an object to string using JavaScript? */

let str_to_obj = {
    name: "GeeksForGeeks", 
    city: "Noida", 
    contact: 2488
};
console.log(str_to_obj);

let res = JSON.stringify(str_to_obj);
console.log(res);