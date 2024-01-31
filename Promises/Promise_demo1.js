
const promise = new Promise((resolve, reject) => {
    resolve(10);
});

    promise.then((value) => {
    console.log('Promise fulfilled with value:', value);
})


