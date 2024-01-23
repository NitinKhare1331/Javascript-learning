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

