// console.log("1");
// setTimeout(() => {
//     console.log("2");
//     setTimeout(() => console.log("3"), 1000);
// }, 2000);
// setTimeout(() => console.log("4"), 1000);
// console.log("5");

// let promise = new Promise((res, rej)=>{
//     res("Nitin");
//     rej("Sonu");
// });
// promise.then((function resolver(value){
//     console.log(`on success, ${value}`);
// }),function rejector(value){
//     console.log(`on rejection, ${value}`);
// })

// let promise = Promise.resolve(3);
// promise.then(value => console.log(value));


// let promise = new Promise((resolve, reject) => {
//     resolve("Success!");
//   });
//   promise.then(value => console.log(value));

// Promise.reject('Error occurred').catch(err => console.log(err));

// let promise = Promise.resolve(1);
// promise.then(value => value + 2).then(value => console.log(value));

// Promise.resolve("Resolved").then(console.log);
// Promise.reject("Rejected").catch(console.log);

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resolved!"), 1000);
//   });
//   promise.then(value => console.log(value));
//   console.log("After promise");

// let promise = new Promise ((res,rej)=>{
//     res("Success!")
// });
// promise.then(function success(value){
//     console.log(value);
// })

// user = {
//     userName : "Nitin",
//     price : 1000,

//     welcomeMessage: function(){
//         console.log(`${user.userName} ,welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.userName = "Sanket"
// user.welcomeMessage();



// let x = 'xyz';
// let a = x.toUpperCase();
// console.log(a);
// let y = x.replace('Y','y');
// console.log(y);
// y += 'abc';
// console.log(y);




// function sumAll(...args){
//     let sum = 0;
//     for (const arg of args) {
//             sum += arg;
//     }
//     return sum;
// }
// const a = sumAll(1,2,3,4);
// console.log(a);


// function a(x){
//     console.log(x);
//     function b(){
//             console.log(x);
//         }
//     return b();
// }

// a(10);

// function vowel_match(city){
//     let matches = city.match(/[aeiou]/gi);
//     matches ? matches.length : 'none'
//     return matches;
// }
// console.log(vowel_match('Hardoi'));


// let pr1 = Promise.resolve(10);
// let pr2 = Promise.resolve(100);
// let pr3 = new   Promise((res,rej) => {
//     res("yaaaaa")
// })
// Promise.all([pr1,pr2,pr3]).then((val) => {
// console.log(val);
// })

// let arr = [1,2,[1,2,3,4]]
// console.log(arr.flat());

// function* gen(){

// }
// class product {
//     function name(good morning everyone my name is nitin khare and i have done my schooling form ) {

//     }
// }
// function f() {
//     x = 100;
//     console.log(this.x);
// }
// f();

const obj = {
    x : 10,
    y : 20,
    inner: function () {
        console.log(this.x,this.y);
    }
}
obj.inner();