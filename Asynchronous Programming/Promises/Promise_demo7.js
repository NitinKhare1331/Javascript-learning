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
})
.then((val)=> {
    console.log('Promise in second then resolved with ',val);
    return val*2;
})
.then((val)=> {
    console.log('Promise in third then resolved with ',val);
    return val*2;
})
.catch((val) => {
    console.log('404 Bad request');
})