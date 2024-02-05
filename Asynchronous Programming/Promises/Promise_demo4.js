function promise(time){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(time);
        },time)
    })
}
const resolver = (val) => {
    console.log(`Promise resolved with value ${val}`);
    return 'Nitin';
}
const rejector = (val) => {
    console.log(`Promise rejected with value ${val}`);
    return 'sanket';
}
const pr1 = promise(5000);
pr1.then(resolver,rejector)
const pr2 = pr1.then(resolver,rejector)
const pr3 = pr2.then(resolver,rejector)
const pr4 = pr1.then(resolver,rejector)