/*when a function is called as an argument is is called callback */

function callbacks(array,fn){
    for(let i = 0;i < array.length;i++){
        console.log("Array at "+i+" is "+array[i]+" and "+" return value of fn is "+fn(array[i]));
    }
}

callbacks([1,2,3,4,5],function cube(x){return x*x*x})