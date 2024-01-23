/* How to check whether an array includes a particular value or not in JavaScript ? */

let a = [ 'Shiva', 2, 3, 4, 5, 'Nitin', 'Shivam', 'Shashank', 10 ];

let valuechecker = (value) => {
    for(let i=0;i< a.length ;i++){
        let current_value = a[i];
        if(value === current_value){
            return value + " is present at index: " + i;
        }
    }
    return value + " is not included in this array"; 
}

console.log(valuechecker("5"));
console.log(valuechecker("Shiva"));
console.log(valuechecker(10));
console.log(valuechecker(1));