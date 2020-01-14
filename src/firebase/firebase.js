import * as firebase from 'firebase';

import 'firebase/analytics';
import 'firebase/database';

// connecting to the database
const firebaseConfig = {
    apiKey: "AIzaSyDQRsSnPp0jJcQ7YCf_Ahvw1yvnqOlMSPs",
    authDomain: "react-expensify-app-4f94f.firebaseapp.com",
    databaseURL: "https://react-expensify-app-4f94f.firebaseio.com",
    projectId: "react-expensify-app-4f94f",
    storageBucket: "react-expensify-app-4f94f.appspot.com",
    messagingSenderId: "49966050630",
    appId: "1:49966050630:web:5ebe6afc97e32565b68947",
    measurementId: "G-VYMFPQPZC8"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// fetching data a single time
// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch(e => console.log('Error fetching data.', e));

// subscribing to changes in data
// const onValueChange = 
//     database
//         .ref()
//         .on('value', snapshot => {
//             const val = snapshot.val();
//             console.log(val);
//         }, e => console.log('Error fetching data.', e));

// setTimeout(() => {
//     database
//         .ref('age')
//         .set(29);
// }, 3500);

// unsubscriptions
// setTimeout(() => {
//     database
//         .ref()
//         .off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database
//         .ref('age')
//         .set(30);
// }, 10500);

const onValueChange = 
    database
        .ref()
        .on('value', snapshot => {
            const { name, job } = snapshot.val();
            console.log(`${name} is a ${job.title} at ${job.company}.`);
        }, e => console.log(e));

setTimeout(() => {
    database
        .ref()
        .update({
            name: 'Alejandro',
            'job/title': 'Dev',
            'job/company': 'Netflix'
        })
}, 3000);

// setTimeout(() => database.ref().off(onValueChange), 5000);

// database
//     .ref()
//     .set({
//         name: 'Alejandro Rodarte',
//         age: 24,
//         stressLevel: 6,
//         job: {
//             title: 'Software Developer',
//             company: 'Google'
//         },
//         location: {
//             city: 'Juarez',
//             country: 'Mexico'
//         }
//     })
//     .then(() => console.log('Data is saved!'))
//     .catch(error => console.log('This failed', error));

// database
//     .ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     })
//     .then(() => console.log('Data is updated!'))
//     .catch(error => console.log('This failed', error));

// database
//     .ref('attributes')
//     .set({
//         height: 175,
//         weight: 58
//     })
//     .then(() => console.log('Attributes are saved!'))
//     .catch(error => console.log('This failed', error));

// database
//     .ref('isSingle')
//     .set(null)
//     .then(() => console.log('Single status deleted!'))
//     .catch(error => console.log('This failed', error));

// database
//     .ref('isSingle')
//     .remove()
//     .then(() => console.log('Single status deleted!'))
//     .catch(error => console.log('This failed', error));

// // with update() we can update properties, create new properties and delete properties
// database
//     .ref()
//     .update({
//         name: 'Magdaleno Mendoza',
//         age: 35,
//         job: 'Software developer',
//         isSingle: null
//     })
//     .then(() => console.log('Data was updated!'))
//     .catch(error => console.log('This failed', error));

// // database with ref() ONLY updates at the root level
// // how to work with nested updates
// database
//     .ref()
//     .update({
//         job: 'Manager',
//         'location/city': 'Boston'
//     });
