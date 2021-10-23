const friends = [
    {name: 'Rashed', money: 12}, 
    {name: 'kashed', money:25},
    {name: 'mashed', money: 37}, 
    {name: 'nashed', money:29}, 
    {name: 'jashed', money:100}
];
const total = friends.reduce((sum, friend) => {
    console.log(sum, friend)
    return sum + friend.money;
}, 0);
console.log(total);