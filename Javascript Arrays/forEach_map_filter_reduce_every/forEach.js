// //Returns value in same array

// let arr = [1,2,3,4,5,6,7,8,9];
// // arr.forEach((Value,index,array)=>{
// //     return Value,index,array;
// // })

// // console.log(Value,index,array);

// // arr.forEach((element)=>{
// //     console.log("element is ",element);
// // })
// // console.log();
// // function customForEach(arr){
// //     fofr(let i=0;i<arr.length ;i++){
// //         console.log("Element is ",arr[i],"and index ",i);
// //     }
// // }
// // customForEach(arr);

// function custForEach(arr,cb){
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i],i)
//     }
// }

// custForEach(arr,(element,index)=>{
//     console.log("array at ",index," is ",element);
// })



// const numbers = [1, 2, 3, 4, 5];
// let sumOdd = 0;
// numbers.forEach(num => {
//     if (num % 2 !== 0) {
//         sumOdd += num;
//     }
// });
// console.log(sumOdd); 

const productCart = [{Name:'AirJordans',Price:23999,Quantity:1},
{Name:'AirPods',Price:19999,Quantity:2},
{Name:'Charger',Price:1459,Quantity:4},
{Name:'PumaShoes',Price:7999,Quantity:1}];

let result = productCart.forEach((product)=>{
    let  value = 0;
    value += product.Price * product.Quantity;
    return value;
});
console.log(result);

// function customForEach(arr,cb){
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i],i)
//     }
// }

// let arr = [2,1,3,4,7,5,4,8,4];
// customForEach(arr,(element,index)=>{
//     console.log("Element is ",element," and index is ",index);
// })