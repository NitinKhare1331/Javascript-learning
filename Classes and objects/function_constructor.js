function product(n,p,d,i) {
    this.name = n;
    this.price = p;
    this.desc = d;
    this.img = i;

    this.display = function () {
        console.log('name: ',this.name, 'price: ',this.price);
    }
}
const p1 = new product('Iphone',132000,'Apple I Phone','img')
console.log(p1);
p1.display();