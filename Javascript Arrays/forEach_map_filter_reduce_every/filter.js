var arr = [223,55,4,6,78,43,23,56,7,8,922,35,4];
let b = arr.filter((a)=>{
    return !(a%2==0); //or a%2!=0 //this filter out odds elements
})
console.log(b);



const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Monitor', type: 'electronic' },
    { name: 'Orange', type: 'fruit' }
];
const fruitNames = items.filter(item => item.type === 'fruit').map(item => item.name);
console.log(fruitNames);