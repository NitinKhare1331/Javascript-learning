function promise(time){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(time);
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