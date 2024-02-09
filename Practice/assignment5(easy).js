function makeTea(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Tea is ready!")
        },5000)
    })
}
function prepareBreakfast() {
    makeTea()
        .then((res) => {
            console.log(res);
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res("Toast is ready!");
                }, 3000);
            });
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

prepareBreakfast();


