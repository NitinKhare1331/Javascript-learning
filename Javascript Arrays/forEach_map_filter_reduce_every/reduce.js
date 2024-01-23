// let c = arr = [1,4,6,8,9,1,2,43,"NITIN",1,2,3,4];
// let d = arr.reduce((a,b) => a+b);
// console.log(d);

const productCart = [{Name:'Air_Jordans',Price:25000,Quantity:1},
{Name:'Air_Pods',Price:18000,Quantity:2},
{Name:'Charger',Price:1800,Quantity:4},
{Name:'Puma_Shoes',Price:8000,Quantity:1}];

let res = productCart.reduce((accumulator, currentValue)=>{
    console.log(accumulator,currentValue);
    return accumulator + currentValue.Price * currentValue.Quantity;
},0);
console.log(res);

// let res = productCart.reduce(function reducer(accumulator,currentValue){
//     return accumulator + currentValue.Price * currentValue.Quantity;
// },0)
// console.log(res);

