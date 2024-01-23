/*JavaScript Program to Find GCD or HCF of Two Numbers? */

function HCFcalc(a,b){
    let smaller = Math.min(a,b)
    let hcf = 0;
    for(let i=1;i<=smaller;i++){
        if(a%i==0 && b%i==0){
            hcf = i;
        }
    }
    return hcf;
}
console.log(HCFcalc(0,0));