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

database.ref().set({
    name: 'Alejandro Rodarte',
    age: 24,
    isSingle: true,
    location: {
        city: 'Juarez',
        country: 'Mexico'
    }
});

database.ref('age').set(27);

database.ref('location/city').set('Chihuahua');

database.ref('attributes').set({
    height: 175,
        weight: 58
});
