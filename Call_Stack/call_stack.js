function f1(){
    console.log("Inside f1");
}

function f2(){
    console.log("Inside f2");
    f1();
    return 6+7;
}

function f3(){
    console.log("Inside f3");
    f2();
    return 5;

}

function f4(){
    console.log("Inside f4");
    const x = 10;
    const y = f3();
    return x+y;
}

console.log("start");
const result = f4();
console.log(result);

/*
* Whenever a function is called it is pushed into call stack;
* Whenever a function returns the it is pushed out of call stack;
* The function at the top of the call stack is the current executing one;
 */