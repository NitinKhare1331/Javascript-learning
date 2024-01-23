/*Returns a new array */

a = [1,2,3,4,44,5,66,433,4,36,665];
let b = a.map((value)=>{
    console.log(value);
    return (value*value);
})
console.log(b);

//map function returns us an array

const products = [{id:1, name:"Iphone" , price:1000},{id:2, name:"IPad" , price:1500},{id:3, name:"airpod" , price:200}]
let modified_products = products.map((product)=>{
    return{ProductId:product.id,ProductName:product.name,ProductPrice:product.price+100}
})
console.log(modified_products);