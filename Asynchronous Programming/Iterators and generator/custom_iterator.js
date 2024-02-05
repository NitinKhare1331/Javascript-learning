function customIterator(arr) {
    let idx = 0;
    function next(){
        if(idx === arr.length){
            return {value:undefined, done: true}
        }
        const nextElement = arr[idx];
        idx++;
        return {value:nextElement, done:false}
    }
    return {next}
}
let arr = [1,2,3,4,5]
let x = customIterator(arr)

