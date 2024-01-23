/*JavaScript Program to Find the Factors of a Number? */

function Factors(a){
    for(let i=1;i<=a;i++){
        if(a%i==0){
            console.log(i);
        }
    }
}
console.log(Factors(10));
