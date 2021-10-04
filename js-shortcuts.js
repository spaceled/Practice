let food;
const money = 150;
const active = true;

if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'Alor Vorta';
}

// Ternary
let food2 = money > 100 ? 'biriyani' : 'Alor Vorta';
console.log(food2);

if (active === true) {
    cssClass = 'active';   
}
else {
    cssClass = 'inActive';
}
const cssClass2 = active ? 'active' : 'inActive';
console.log(cssClass2);

// Function call shortcut alternative

// active ? displayUser() : hiderUser()
// active && displayUser();
// active || displayUser();

const x = active && 5;
const y = active || 5;


console.log(x);
console.log(y);

const number = typeof('45');

// String to Number
const number2 = +'45';
console.log('Number: ', number2);

// Number to String
const numText = 45 + '';
console.log(numText);

// Default Parameter
function add(num1, num2 = 5) {
    // num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10);
