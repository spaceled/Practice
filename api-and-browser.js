// JSON
const person = {
    name: 'abdul',
    age: 25
};

// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

// Local Storage
// LocalStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);

// API fetch
// fetch('url')
// .then(res => res.json())
// .then(data =>console.log(data));