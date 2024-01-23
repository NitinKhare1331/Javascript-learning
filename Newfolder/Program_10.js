/*JavaScript Program to print Fibonacci Series? */

function fibonacciSeriesSum(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    let result = fibonacciSeriesSum(n - 1) + fibonacciSeriesSum(n - 2);
    return result;
}
console.log(fibonacciSeriesSum(10));