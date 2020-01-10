const person = {
    name: 'Alejandro',
    age: 24,
    location: {
        city: 'Ciudad Juarez',
        temp: 15
    }
};

// destructure with default values
const { name = 'Anonymous', age = 0 } = person;

// destructure with custom name
const { city, temp: temperature } = person.location;

console.log(`${name} is ${age}`);

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName);