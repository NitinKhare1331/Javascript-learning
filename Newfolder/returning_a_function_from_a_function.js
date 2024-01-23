/*When a function returns a function */

function fun(){
    console.log("Function fun is called");
    return function cleanUp(){
        console.log("cleaning up the resources");
    }
}
let result = fun();
console.log(result);
result();

