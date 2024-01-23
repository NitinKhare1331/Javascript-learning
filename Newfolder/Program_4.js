/*Javascript program to generate random number between two given numbers? */

function randomNumberGenerator(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
let resutl = randomNumberGenerator(1,200);
console.log(resutl);