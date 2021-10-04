// Array Destructuring
const numbers = [44, 19, 100, 587, 4];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 92];
const [x, y] = numbers;

console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 5];
}

const [state1, state2] = boxify(8);
console.log(state1, state2);

// Object Destructuring
const person = {id: 2, money: 34, name: 'Rahim', age: 25};
const {money} = person;

console.log(money);

// Create Object shortcut
const one = 25;
const two = 35;
const obj = {x: x, y: y};
const obj2 = {one, two};
console.log(obj2);

// New array using three dots
const newNumbers = [...numbers, 56];
console.log(newNumbers);