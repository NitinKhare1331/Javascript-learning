/*How to Create an Array using Intersection of two Arrays in JavaScript? */
/* OR return common elements of 2 arrays. */

let result = (a1,a2) => {
    let new_Arr = [];
    for(let i=0; i<a1.length; i++){
        for(let j=0;j<a2.length;j++){
            if(a1[i]===a2[j]){
                new_Arr.push(a2[j])
            }
        }
    }
    return new_Arr;
}

let a1 = [1,"2",3,4,4,,5,6,6,7,8];
let a2 =[1,2,3,7,0,47,77,29]
console.log(result(a1,a2));

/*Alternate */

a1 = [1,2,3,4,5];
a2 = [1,4,2,3,4,5];
let new_arr = []
for(let i=0;i<a1.length;i++){
    for(let j=0;j<a2.length;j++){
        if(a1[i]===a2[j]){
            new_arr.push(a1[i]);
        }
    }
}
console.log(new_arr);