// function downloader(url,cb){
//     console.log('Download started from ',url);
//     setTimeout(()=>{
//         console.log('Download complete');
//         let downloadeddata = 'Dummy content';
//         cb(downloadeddata);
//     },4000)
// }

// function writeFile(data,cb){
//     console.log("Started writing data in ", data);
//     setTimeout(()=>{
//         console.log('Writing complete');
//         let filename = 'Dummy.txt'
//         cb(filename);
//     },2000)
// }

// function uploadFile(filename,newUrl,cb){
//     console.log(filename,' started to upload on new Url ',newUrl);
//     setTimeout(()=>{
//         console.log('File uploaded to new url');
//         let uploadResponse = 'SUCCESS';
//         cb(uploadResponse);
//     },3000)
// }

// console.log('starting the program');
// downloader('www.google.com',(downloadeddata)=>{
//     writeFile(downloadeddata,(filename)=>{
//         uploadFile(filename,'www.drive.google.com',(uploadResponse)=>{
//             console.log('status of upload ',uploadResponse);
//         })
//     })
// })


function createAsyncPromise(){
    return new Promise((res,rej)=>{
        setTimeout(function TimerCompleted(){
            const value = Math.random();
            if(value<0.5){
                res(value);
            }
            else{
                rej(value);
            }
        },1000)
    })
}
createAsyncPromise();







