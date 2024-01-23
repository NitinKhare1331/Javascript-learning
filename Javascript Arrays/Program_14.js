/*How to compare two arrays in JavaScript? */

function equal_arr(){
    let a = [1,2,3,4,5]
    let b = [1,2,3,4,5]
    if(a.length != b.length){
        return false
    }
    else{
        for(let i=0;i<a.length;i++){
            if(a[i]!=b[i]){
                return false;
            }
        }
        return true
    }
}
console.log(equal_arr());

/*Alternate */

function is_equal(a,b){
    return a.join("")==b.join("")
}
a = [1,2,3,4,6,4]
b = [1,2,3,4,5]
console.log(is_equal(a,b));