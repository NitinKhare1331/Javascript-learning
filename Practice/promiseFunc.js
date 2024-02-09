function makeEggs() {
    return new Promise ((res,rej) => {
        const delay = Math.floor(Math.random()*6)+1;
        setTimeout(() => {
            res(`Eggs are ready in ${delay} sec`)
        },delay*1000)
    })
}

function makeToast() {
    return new Promise((res,rej) => {
        const delay = Math.floor(Math.random()*6)+1;
        setTimeout(() => {
            res(`Toast is ready in ${delay} sec`)
        },delay*1000)
    })
}

function makeTea(){
    return new Promise((res,rej) => {
        const delay = Math.floor(Math.random()*6)+1;
        setTimeout(() => {
            res(`Tea is ready in ${delay} sec`)
        },delay*1000)
    })
}

async function prepareFullBreakfast(){
    try{
        const [eggres,toastres,teares] = await Promise.all([makeEggs(),makeToast(),makeTea()]);
        console.log(eggres);
        console.log(toastres);
        console.log(teares);
        console.log('Full breakfast is ready!');
    }
    catch (err) {
        console.log(err);
    }
}

prepareFullBreakfast();
