// async function fun(){
//     console.log(1000);
//     await 10;
//     console.log(10989);

// }
// fun();
// console.log('ubfwhfs');

function temp(time){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(time);
            console.log('inside temp');
        },time)
    })
}

async function temp1(){
    await temp(4000);
    console.log('hi there');
}
console.log("start");
temp1()
console.log('end');
