// for(let i = 0;i<10000000;i++){
//     //some work
// }
// console.log("LOOP 1 ENDS");
// for(i = 0;i<100;i++){
// }
// console.log("LOOP 2 ENDS");
// setTimeout(()=>{
//     console.log("Timeout 1")
// },10000)
// for(i = 0;i<1000000000;i++){
// }
// console.log("LOOP 3 ENDS");
// setTimeout(()=>{
//     console.log("Timeout 2");
// },1000)
// for(i = 0;i<20;i++){
// }
// console.log("LOOP 4 ENDS");
// setTimeout(()=>{
//     console.log("Tmeout 3");
// },100)
// for(let i=20;i>=1;i=i-1){
//     console.log(i);
// }
// let i =20;
// while(i>=1){
//     console.log(i);
//     i-=1
// }

// for(let i=0;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
// }

// let x =1234;
// let sum = 0;
// let y = x.toString();
// for(let i=0;i<y.length;i++){
//     let rem = x%10;
//     sum += rem;
//     x = Math.floor(x/10);
// }
// console.log(sum);

// let a = [1,2,3,4,5,6,7]
// function forEach(){
//     for(let i=0;i<a.length;i++){
//         console.log("array at ",i," is ",a[i]);
//     }
// }
// forEach();

// let arr = Array(15);
// console.log(arr);

// let arrayWithAll0 = Array(10).fill(10,3,8);
// console.log(arrayWithAll0);
// console.log(NaN ==NaN);


// function customForEach(arr,cb){
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i],i)
//     }
// }

// let arr = [2,1,3,4,7,5,4,8,4];
// customForEach(arr,(element,index)=>{
//     console.log("Element is ",element," and index is ",index);
// })

// const numbers = [1, 2, 3, 4, 5];
// let sumOdd = 0;
// numbers.forEach(num => {
//     if (num % 2 !== 0) {
//         sumOdd += num;
//     }
// });
// console.log(sumOdd); 

// const arr = [1,400,5,6,9]
// const result = arr.every((element) => {
//     console.log(element);
//     return element < 100;
// });


// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// console.log("C");

// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => console.log("B"), 1000);
// }, 1000);
// console.log("C");

// setTimeout(() => console.log("A"), 3000);
// setTimeout(() => console.log("B"), 2000);
// setTimeout(() => console.log("C"), 1000);

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// console.log("Hi");
// for(let i=0;i<10000000000;i++){
//     //some work
// }
// console.log("loop complete");

// let fileName = ["1.js"]

// setTimeout(function downloader(url,cb){
//     url = "File download complete";
//     cb = setTimeout(()=>{
//         console.log(url);
//     },4000)
// },0);

// setTimeout(function writeFile(data,cb){
//     file = fileName[0];
//     data = "file saved"
//     cb = setTimeout(()=>{
//         console.log(`${data} and file name is ${file}.`);
//     },3000)
// },3000);

// setTimeout(function uploadFile(filename, newUrl, cb){
//     newUrl = "www.newUrl.com"
//     filename = fileName[0];
//     cb = setTimeout(()=>{
//         console.log(`File uploaded to new url i.e ${newUrl} and filename is ${filename}.`);
//     },2000)
// },5000);


// new Promise((res ,rej)=>{

// })

// let fileName = ["1.js"]

// setTimeout(function downloader(url,cb){
//     url = "File download complete";
//     cb = setTimeout(()=>{
//         console.log(url);
//     },4000)
// },0);

// setTimeout(function writeFile(data,cb){
//     file = fileName[0];
//     data = "file saved"
//     cb = setTimeout(()=>{
//         console.log(`${data} and file name is ${file}.`);
//     },3000)
// },3000);

// setTimeout(function uploadFile(filename, newUrl, cb){
//     newUrl = "www.newUrl.com"
//     filename = fileName[0];
//     cb = setTimeout(()=>{
//         console.log(`File uploaded to new url i.e ${newUrl} and filename is ${filename}.`);
//     },2000)
// },5000);

let arr = [1,2,3,4,5];
let x = arr[Symbol.iterator]();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

