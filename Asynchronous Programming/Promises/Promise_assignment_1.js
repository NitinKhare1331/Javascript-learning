console.log('Starting the program');
function downloader(url){
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log(`Starting download file from ${url}`);

            res();
        },4000)
    })
}

function fileSaver(data){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let filename = 'Temp.txt';
            console.log(`file saved and file name is ${filename}`);
            res();
        },2000)
    })
}

function fileUploader(filename,newUrl){
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log(`file ${filename} uploading to ${newUrl}`);
            res(`File uploaded to ${newUrl}`)
        },3000)
    })
}

downloader('www.google.com')
    .then((downloaded_data) => {
        return fileSaver(downloaded_data)
    })
    .then((filename) => {
        return fileUploader(filename, 'www.drive.google.com')
    })
    .then((result) => {
        console.log(result);
    })
