/*JavaScript Program to Check if Two Numbers have Same Last Digit? */

function checkLastDigit(a,b){
    const lastDigitOfa = a%10;
    const lastDigitOfb = b%10;
    if(lastDigitOfa == lastDigitOfb){
        console.log("Numbers have same last digit");
    }
    else{
        console.log("Numbers don't have same last digit");
    }
}

checkLastDigit(101,202)