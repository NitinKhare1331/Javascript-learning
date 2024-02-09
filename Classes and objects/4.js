const obj = {
    x:10,
    y:20,
    display: () => {
        console.log(`value of x is ${this.x} and value of y is ${this.y}`);
    }
}
obj.display();
