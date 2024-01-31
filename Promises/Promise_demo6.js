function promise(time){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            rej(time);
        },time)
    })
}

promise(2000)
.then((val)=> {
    console.log('Promise in first then resolved with ',val);
    return val*2;
},(val) => {
    console.log('Promise in first then rejected with ',val);
    throw 500;
})
.then((val)=> {
    console.log('Promise in second then resolved with ',val);
    return val*2;
},(val) => {
    console.log('Promise in second then rejected with ',val);
    throw 100;
})
.then((val)=> {
    console.log('Promise in third then resolved with ',val);
    return val*2;
},(val) => {
    console.log('Promise in third then rejected with ',val);
    return 500;
})