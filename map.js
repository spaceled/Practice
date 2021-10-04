const products = [
    {id: 1, name: 'watch', price: 10},
    {id: 2, name: 'pen', price: 5, },
    {id: 3, name: 'phone', price: 17300},
    {id: 4, name: 'laptop', price: 45000},
    {id: 5, name: 'Mouse', price: 80},
    {id: 6, name: 'USB', price: 120},
    {id: 7, name: 'HeadPhone', price: 100},
    {id: 8, name: 'WIFI', price: 80},
]

// Map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);

console.log(names);
console.log(prices);

// forEach

products.forEach(product => console.log(product.name));

// Filter
const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);
// Remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// Find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log('Has Watch: ', hasWatch);