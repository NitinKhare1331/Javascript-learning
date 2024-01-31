function createAsyncPromise(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            // res('Nitin')
            rej('Sonu')
        },3000)
    })
}
let pr = createAsyncPromise();
pr.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

