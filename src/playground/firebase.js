// child_removed: subscription that fires when a child gets removed
// we get back the deleted object
// database
//     .ref('expenses')
//     .on('child_removed', snapshot => console.log(snapshot.key, snapshot.val()));

// child_changed: triggers when a child inside reference changes
// we get back the updated object
// database
//     .ref('expenses')
//     .on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()));

// database
//     .ref('expenses')
//     .on('child_added', snapshot => console.log(snapshot.key, snapshot.val()));

// database
//     .ref('expenses')
//     .push({
//         description: 'Third expense',
//         note: 'Third expense note',
//         amount: 900,
//         createdAt: 5390000000
//     });

// const snapshotToExpensesArray = snapshot => {

//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);

// };

// database
//     .ref('expenses')
//     .once('value')
//     .then(snapshotToExpensesArray)
//     .catch(e => console.log(e));

// database
//     .ref('expenses')
//     .on('value', snapshotToExpensesArray);

// const expenses = [
//     {
//         description: 'First expense',
//         note: 'First expense note',
//         amount: 10000,
//         createdAt: -146000000
//     },
//     {
//         description: 'Second expense',
//         note: 'Second expense note',
//         amount: 85600,
//         createdAt: 298000000
//     },
//     {
//         description: 'Third expense',
//         note: 'Third expense note',
//         amount: 900,
//         createdAt: 5390000000
//     }
// ];

// for (const expense of expenses) {
//     database
//         .ref('expenses')
//         .push(expense);
// }

// database
//     .ref('notes/-LyXGH9Mhd_u4iXkUWBE')
//     .update({
//         body: 'Buy food'
//     });

// database
//     .ref('notes')
//     .push({
//         title: 'Course Topics',
//         body: 'React Native, Angular, Python'
//     });

// const firebaseNotes = {
//     notes: {
//         ae4ff9ab: {
//             id: '12',
//             title: 'First note',
//             body: 'This is my note'
//         },
//         d8ba37ed: {
//             id: '761ase',
//             title: 'Another note',
//             body: 'This is another note'
//         }
//     }
// };

// const notes = [
//     {
//         id: '12',
//         title: 'First note',
//         body: 'This is my note'
//     },
//     {
//         id: '761ase',
//         title: 'Another note',
//         body: 'This is another note'
//     }
// ];

// database
//     .ref('notes')
//     .set(notes);

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

// const onValueChange = 
//     database
//         .ref()
//         .on('value', snapshot => {
//             const { name, job } = snapshot.val();
//             console.log(`${name} is a ${job.title} at ${job.company}.`);
//         }, e => console.log(e));

// setTimeout(() => {
//     database
//         .ref()
//         .update({
//             name: 'Alejandro',
//             'job/title': 'Dev',
//             'job/company': 'Netflix'
//         })
// }, 3000);

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
