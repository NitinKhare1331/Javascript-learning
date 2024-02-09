class complex{
    constructor(real,img){
        this.real = real;
        this.img = img;
    }
    add(num){
        return (`sum = ${this.real + num.real} + ${this.img+num.img}i`);
    }
    multiply(num){
        return (`multiplication = ${this.real*num.real - this.img*num.real} + ${this.real*num.img + this.img*num.real}i`)
    }
}


const c1 = new complex(1,2);
const c2 = new complex(2,4);
const x = c1.add(c2);
console.log(x);
const y = c1.multiply(c2);
console.log(y);
