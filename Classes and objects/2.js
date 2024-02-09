const obj = {
    x:10,
    y:20,
    display: function (){
        console.log(`value of x is ${this.x} and value of y is ${this.y}`);
    }
}
obj.display();

/**
 * Who is calling display => obj
 * This means obj is the call site 
 */