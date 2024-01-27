// console.log('Starting the program');
// function downloader(url){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log(`Starting download file from ${url}`);
//             res();
//         },4000)
//     })
// }

// function fileSaver(data){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             let filename = 'Temp.txt';
//             console.log(`file saved and file name is ${filename}`);
//             res();
//         },2000)
//     })
// }

// function fileUploader(filename,newUrl){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log(`file ${filename} uploading to ${newUrl}`);
//             res(`File uploaded to ${newUrl}`)
//         },3000)
//     })
// }

// downloader('www.google.com')
//     .then((downloaded_data) => {
//         return fileSaver(downloaded_data)
//     })
//     .then((filename) => {
//         return fileUploader(filename, 'www.drive.google.com')
//     })
//     .then((result) => {
//         console.log(result);
//     })

function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time);
    });
}

const resolver = (val) => {
    console.log("Resolving with", val);
    return 20;
};
const rejector = (val) => console.log("Rejecting with", val);

createPromise(10000)
.then((value) => {
    console.log("Value in first then", value);
    return value*2;
})
createPromise(10000)
.then((value) => {
    console.log("Value in second then", value);
    return value*2;
})
createPromise(10000)
.then((value) => {
    console.log("Value in third then", value);
    return value*2;
})
