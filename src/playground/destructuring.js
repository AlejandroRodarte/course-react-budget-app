// // object destructuring

// const person = {
//     name: 'Alejandro',
//     age: 24,
//     location: {
//         city: 'Ciudad Juarez',
//         temp: 15
//     }
// };

// // destructure with default values
// const { name = 'Anonymous', age = 0 } = person;

// // destructure with custom name
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// ------

// array destructuring

const address = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

// leave comma to indicate we skip address[0] element
// we can also apply defaults
const [, city = 'New York', state = 'New York'] = address;

console.log(`You are in ${city}, ${state}`);

// item name; small price, medium price, large price
const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [itemName, , mediumSizePrice] = item;

console.log(`A medium ${itemName} costs ${mediumSizePrice}`);
