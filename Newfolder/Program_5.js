/*Javascript program to check a number is prime or not? */

function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i = 2;i<=n/2; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
let n = 11;
if(isPrime(n)){
    console.log(`${n} is prime.`);
}
else{
    console.log(`${n} is not prime.`);
}