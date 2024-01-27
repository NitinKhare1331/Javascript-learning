// const pr = new Promise ((res,rej) => {
//     setTimeout(() => {
//         res('Nitin')
//     },5000)
// })

// for (let i=0;i<10000000000;i++){
//     //some task
// }

// pr1 = pr.then((val) => {
//     console.log(`Promise resolved with val ${val}`);
//     return 10;
// })

let arr = [1,2,3,4,5]
let arr1 = [1,2,3,4,5]
let obj = {1:'a',2:'b'}
console.log(...arr,...arr1);
let new_obj = {...obj,1:'z'}
console.log(new_obj);