class Product {
    // properties -> class/data members
    // name;
    // price;
    // desp;
    // img;

    constructor (n,p,d,i) {
        console.log('object created');
        console.log(this);
        this.name = n;
        this.price = p;
        this.desp = d;
        this.img = i
        console.log('created object',this);
    }

    //behaviours -> class methods
    buyProduct (){
        console.log('Bought a new product',this);
    }
}

const obj = new Product('Iphone',100000,'apple I Phone','some img');
console.log(obj);
obj.buyProduct();
// console.log(this);